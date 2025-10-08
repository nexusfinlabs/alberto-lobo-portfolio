import * as THREE from "three";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {

  // Import scene
  const computer = useGLTF("/desktop_pc.glb");

  // Ajustes de materiales: ilumina solo la pantalla, sin lavar los colores
  computer.scene.traverse((child) => {
    if (child.isMesh && child.material) {
      // Si el nombre del mesh incluye "screen" o "monitor"
      if (
        child.name.toLowerCase().includes("screen") ||
        child.name.toLowerCase().includes("display")
      ) {
        // Aumenta brillo del display
        child.material.emissive = new THREE.Color(0xffffff);
        child.material.emissiveIntensity = 1.5;
      } else {
        // Resto del modelo con iluminación normal
        child.material.emissiveIntensity = 0.1;
        child.material.roughness = 0.6;
        child.material.metalness = 0.2;
      }

      // Asegura que los mapas de textura se vean correctamente
      if (child.material.map) {
        child.material.map.encoding = THREE.sRGBEncoding;
        child.material.map.needsUpdate = true;
      }
    }
  });

  return (
    // Mesh
    <mesh>
      <ambientLight intensity={0.35} />   // antes 0.6
      <hemisphereLight intensity={0.25} groundColor="black" />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        castShadow
      />
      <primitive
      object={computer.scene}
      scale={isMobile ? 8 : 10}
      position={isMobile ? [0, 0.5, 0] : [0, -0.25, 0]}
      rotation={[0, Math.PI/24, 0]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          rotateSpeed={0.8}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};
useGLTF.preload("/desktop_pc.glb");
export default ComputersCanvas;
