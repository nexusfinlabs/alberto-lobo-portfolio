#!/usr/bin/env python3
"""
Generate a laptop GLB model with a LinkedIn screenshot as the screen texture.
The laptop consists of:
  - A base (keyboard deck)
  - A lid (screen housing) hinged at 90°
  - A textured screen plane showing the LinkedIn image
"""

import struct
import numpy as np
from pygltflib import (
    GLTF2, Scene, Node, Mesh, Primitive, Buffer, BufferView, Accessor,
    Image as GLTFImage, Texture, TextureInfo, Material, Sampler,
    FLOAT, UNSIGNED_SHORT, ARRAY_BUFFER, ELEMENT_ARRAY_BUFFER,
    SCALAR, VEC2, VEC3, LINEAR, LINEAR_MIPMAP_LINEAR, CLAMP_TO_EDGE,
    OPAQUE
)
from PIL import Image as PILImage
import io
import sys
import os

# ── Configuration ──
BASE_W, BASE_D, BASE_H = 3.4, 2.2, 0.12      # keyboard deck
LID_W, LID_H, LID_THICK = 3.5, 2.35, 0.06    # screen lid (outer)
SCREEN_W, SCREEN_H = 3.1, 2.0                  # display area
HINGE_Y = BASE_H                               # hinge height
HINGE_Z = -BASE_D / 2                          # hinge at back edge

def make_box_mesh(w, h, d, offset=(0, 0, 0)):
    """Create a box with 24 vertices (separate normals per face) centered at offset."""
    ox, oy, oz = offset
    hw, hh, hd = w/2, h/2, d/2

    # 6 faces × 4 vertices = 24 vertices
    positions = []
    normals = []
    uvs = []
    indices = []

    faces = [
        # front (+Z)
        ([ (-hw, -hh, hd), (hw, -hh, hd), (hw, hh, hd), (-hw, hh, hd) ], (0, 0, 1)),
        # back (-Z)
        ([ (hw, -hh, -hd), (-hw, -hh, -hd), (-hw, hh, -hd), (hw, hh, -hd) ], (0, 0, -1)),
        # top (+Y)
        ([ (-hw, hh, hd), (hw, hh, hd), (hw, hh, -hd), (-hw, hh, -hd) ], (0, 1, 0)),
        # bottom (-Y)
        ([ (-hw, -hh, -hd), (hw, -hh, -hd), (hw, -hh, hd), (-hw, -hh, hd) ], (0, -1, 0)),
        # right (+X)
        ([ (hw, -hh, hd), (hw, -hh, -hd), (hw, hh, -hd), (hw, hh, hd) ], (1, 0, 0)),
        # left (-X)
        ([ (-hw, -hh, -hd), (-hw, -hh, hd), (-hw, hh, hd), (-hw, hh, -hd) ], (-1, 0, 0)),
    ]

    face_uvs = [(0, 0), (1, 0), (1, 1), (0, 1)]

    for verts, normal in faces:
        base_idx = len(positions)
        for i, (x, y, z) in enumerate(verts):
            positions.append((x + ox, y + oy, z + oz))
            normals.append(normal)
            uvs.append(face_uvs[i])
        indices.extend([base_idx, base_idx+1, base_idx+2, base_idx, base_idx+2, base_idx+3])

    return (
        np.array(positions, dtype=np.float32),
        np.array(normals, dtype=np.float32),
        np.array(uvs, dtype=np.float32),
        np.array(indices, dtype=np.uint16),
    )


def make_plane_mesh(w, h, offset=(0, 0, 0), normal_dir=(0, 0, 1), up_dir=(0, 1, 0)):
    """Create a quad plane facing normal_dir, centered at offset."""
    ox, oy, oz = offset
    n = np.array(normal_dir, dtype=np.float32)
    up = np.array(up_dir, dtype=np.float32)

    right = np.cross(up, n)
    right = right / np.linalg.norm(right)
    actual_up = np.cross(n, right)
    actual_up = actual_up / np.linalg.norm(actual_up)

    hw, hh = w / 2, h / 2
    p0 = np.array([ox, oy, oz]) - right * hw - actual_up * hh
    p1 = np.array([ox, oy, oz]) + right * hw - actual_up * hh
    p2 = np.array([ox, oy, oz]) + right * hw + actual_up * hh
    p3 = np.array([ox, oy, oz]) - right * hw + actual_up * hh

    positions = np.array([p0, p1, p2, p3], dtype=np.float32)
    norm_arr = np.array([n, n, n, n], dtype=np.float32)
    uvs = np.array([(0, 0), (1, 0), (1, 1), (0, 1)], dtype=np.float32)
    indices = np.array([0, 1, 2, 0, 2, 3], dtype=np.uint16)

    return positions, norm_arr, uvs, indices


def add_mesh_to_gltf(gltf, bin_data, positions, normals, uvs, indices, material_idx):
    """Add a mesh primitive to the GLTF, appending to bin_data."""
    pos_bytes = positions.tobytes()
    norm_bytes = normals.tobytes()
    uv_bytes = uvs.tobytes()
    idx_bytes = indices.tobytes()

    # Buffer views
    bv_start = len(gltf.bufferViews)

    # Positions buffer view
    pos_offset = len(bin_data)
    bin_data.extend(pos_bytes)
    # Pad to 4-byte alignment
    while len(bin_data) % 4 != 0:
        bin_data.extend(b'\x00')

    gltf.bufferViews.append(BufferView(
        buffer=0, byteOffset=pos_offset, byteLength=len(pos_bytes),
        target=ARRAY_BUFFER
    ))

    # Normals buffer view
    norm_offset = len(bin_data)
    bin_data.extend(norm_bytes)
    while len(bin_data) % 4 != 0:
        bin_data.extend(b'\x00')

    gltf.bufferViews.append(BufferView(
        buffer=0, byteOffset=norm_offset, byteLength=len(norm_bytes),
        target=ARRAY_BUFFER
    ))

    # UVs buffer view
    uv_offset = len(bin_data)
    bin_data.extend(uv_bytes)
    while len(bin_data) % 4 != 0:
        bin_data.extend(b'\x00')

    gltf.bufferViews.append(BufferView(
        buffer=0, byteOffset=uv_offset, byteLength=len(uv_bytes),
        target=ARRAY_BUFFER
    ))

    # Indices buffer view
    idx_offset = len(bin_data)
    bin_data.extend(idx_bytes)
    while len(bin_data) % 4 != 0:
        bin_data.extend(b'\x00')

    gltf.bufferViews.append(BufferView(
        buffer=0, byteOffset=idx_offset, byteLength=len(idx_bytes),
        target=ELEMENT_ARRAY_BUFFER
    ))

    # Accessors
    acc_start = len(gltf.accessors)
    pos_min = positions.min(axis=0).tolist()
    pos_max = positions.max(axis=0).tolist()

    gltf.accessors.append(Accessor(
        bufferView=bv_start, byteOffset=0, componentType=FLOAT,
        count=len(positions), type=VEC3, max=pos_max, min=pos_min
    ))
    gltf.accessors.append(Accessor(
        bufferView=bv_start + 1, byteOffset=0, componentType=FLOAT,
        count=len(normals), type=VEC3
    ))
    gltf.accessors.append(Accessor(
        bufferView=bv_start + 2, byteOffset=0, componentType=FLOAT,
        count=len(uvs), type=VEC2
    ))
    gltf.accessors.append(Accessor(
        bufferView=bv_start + 3, byteOffset=0, componentType=UNSIGNED_SHORT,
        count=len(indices), type=SCALAR
    ))

    # Mesh
    mesh_idx = len(gltf.meshes)
    gltf.meshes.append(Mesh(primitives=[Primitive(
        attributes={"POSITION": acc_start, "NORMAL": acc_start + 1, "TEXCOORD_0": acc_start + 2},
        indices=acc_start + 3,
        material=material_idx
    )]))

    return mesh_idx


def main():
    project_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    linkedin_path = os.path.join(project_dir, "public", "linkedin-screen.png")
    output_path = os.path.join(project_dir, "public", "laptop_linkedin.glb")

    print(f"Reading LinkedIn screenshot from: {linkedin_path}")

    # Load and convert image to JPEG for smaller GLB
    img = PILImage.open(linkedin_path).convert("RGB")
    img_buf = io.BytesIO()
    img.save(img_buf, format="JPEG", quality=85)
    img_bytes = img_buf.getvalue()

    print(f"Image size: {img.width}x{img.height}, JPEG bytes: {len(img_bytes)}")

    # ── Build GLTF ──
    gltf = GLTF2()
    gltf.scene = 0
    gltf.scenes = [Scene(nodes=[0])]  # root node
    gltf.buffers = [Buffer(byteLength=0)]  # placeholder, updated at end
    gltf.samplers = [Sampler(
        magFilter=LINEAR, minFilter=LINEAR_MIPMAP_LINEAR,
        wrapS=CLAMP_TO_EDGE, wrapT=CLAMP_TO_EDGE
    )]

    # ── Embed image ──
    bin_data = bytearray()

    img_offset = len(bin_data)
    bin_data.extend(img_bytes)
    while len(bin_data) % 4 != 0:
        bin_data.extend(b'\x00')

    gltf.bufferViews.append(BufferView(
        buffer=0, byteOffset=img_offset, byteLength=len(img_bytes)
    ))
    img_bv_idx = 0

    gltf.images = [GLTFImage(bufferView=img_bv_idx, mimeType="image/jpeg")]
    gltf.textures = [Texture(sampler=0, source=0)]

    # ── Materials ──
    # 0: Aluminium body
    gltf.materials.append(Material(
        name="aluminium",
        pbrMetallicRoughness={
            "baseColorFactor": [0.75, 0.75, 0.75, 1.0],
            "metallicFactor": 0.85,
            "roughnessFactor": 0.18
        }
    ))
    # 1: Dark keyboard/bezel
    gltf.materials.append(Material(
        name="dark",
        pbrMetallicRoughness={
            "baseColorFactor": [0.1, 0.1, 0.1, 1.0],
            "metallicFactor": 0.3,
            "roughnessFactor": 0.5
        }
    ))
    # 2: Screen with LinkedIn texture (unlit for visibility)
    gltf.materials.append(Material(
        name="screen",
        pbrMetallicRoughness={
            "baseColorTexture": TextureInfo(index=0),
            "baseColorFactor": [1.0, 1.0, 1.0, 1.0],
            "metallicFactor": 0.0,
            "roughnessFactor": 1.0
        },
        emissiveTexture=TextureInfo(index=0),
        emissiveFactor=[0.5, 0.5, 0.5]
    ))

    # ── Geometry ──

    # Base (keyboard deck)
    p, n, u, i = make_box_mesh(BASE_W, BASE_H, BASE_D, offset=(0, BASE_H / 2, 0))
    base_mesh = add_mesh_to_gltf(gltf, bin_data, p, n, u, i, material_idx=0)

    # Keyboard surface (dark inset on top of base)
    kb_w, kb_d = BASE_W * 0.85, BASE_D * 0.45
    p, n, u, i = make_plane_mesh(kb_w, kb_d,
        offset=(0, BASE_H + 0.002, -0.15),
        normal_dir=(0, 1, 0), up_dir=(0, 0, -1))
    kb_mesh = add_mesh_to_gltf(gltf, bin_data, p, n, u, i, material_idx=1)

    # Trackpad
    p, n, u, i = make_plane_mesh(1.1, 0.7,
        offset=(0, BASE_H + 0.002, 0.65),
        normal_dir=(0, 1, 0), up_dir=(0, 0, -1))
    tp_mesh = add_mesh_to_gltf(gltf, bin_data, p, n, u, i, material_idx=1)

    # ── Lid (90° open) ──
    # Lid extends upward from hinge (already in final position)
    lid_center_y = HINGE_Y + (LID_H / 2)
    p, n, u, i = make_box_mesh(LID_W, LID_H, LID_THICK,
        offset=(0, lid_center_y, HINGE_Z))
    lid_mesh = add_mesh_to_gltf(gltf, bin_data, p, n, u, i, material_idx=0)

    # Screen bezel (dark)
    bezel_w, bezel_h = SCREEN_W + 0.08, SCREEN_H + 0.08
    p, n, u, i = make_box_mesh(bezel_w, bezel_h, LID_THICK + 0.005,
        offset=(0, lid_center_y, HINGE_Z + LID_THICK / 2 - 0.005))
    bezel_mesh = add_mesh_to_gltf(gltf, bin_data, p, n, u, i, material_idx=1)

    # Screen display (LinkedIn) — faces +Z (toward user)
    p, n, u, i = make_plane_mesh(SCREEN_W, SCREEN_H,
        offset=(0, lid_center_y, HINGE_Z + LID_THICK / 2 + 0.005),
        normal_dir=(0, 0, 1), up_dir=(0, 1, 0))
    screen_mesh = add_mesh_to_gltf(gltf, bin_data, p, n, u, i, material_idx=2)

    # ── Node tree ──
    # Root node with all mesh children
    gltf.nodes = [
        Node(name="laptop_root", children=[1, 2, 3, 4, 5, 6]),
        Node(name="base", mesh=base_mesh),
        Node(name="keyboard", mesh=kb_mesh),
        Node(name="trackpad", mesh=tp_mesh),
        Node(name="lid", mesh=lid_mesh),
        Node(name="bezel", mesh=bezel_mesh),
        Node(name="screen_display", mesh=screen_mesh),
    ]

    # ── Finalize buffer ──
    gltf.buffers[0].byteLength = len(bin_data)

    # Set binary blob
    gltf.set_binary_blob(bytes(bin_data))

    # Save
    gltf.save(output_path)
    file_size = os.path.getsize(output_path) / 1024
    print(f"✅ GLB saved to: {output_path} ({file_size:.0f} KB)")


if __name__ == "__main__":
    main()
