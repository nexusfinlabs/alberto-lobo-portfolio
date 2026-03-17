# 🎨 Tutorial: Cambiar la imagen de la pantalla del portátil en Blender

> Tiempo estimado: 5 minutos

## Preparar

1. **Instala Blender** si no lo tienes: [blender.org/download](https://www.blender.org/download/) (gratis)
2. **Prepara tu captura de LinkedIn** como PNG (la que quieras que se vea en la pantalla)

---

## Paso 1 — Importar el modelo

1. Abre Blender → `File > Import > glTF 2.0 (.glb/.gltf)`
2. Navega a: `portfolios_test/alberto-lobo-portfolio/dist/desktop_pc.glb`
3. Haz click en **Import glTF 2.0**

## Paso 2 — Encontrar la pantalla

1. Cambia a **Material Preview** (botón con la esfera en la barra superior, o pulsa `Z` → Material Preview)
2. Ahora verás el escritorio con el portátil y la imagen actual de LinkedIn
3. Haz zoom con la rueda del ratón hasta ver bien la pantalla

## Paso 3 — Abrir el UV Editor

1. Divide la ventana: arrastra el borde superior-izquierdo del viewport 3D hacia la derecha
2. En la nueva ventana, cambia el Editor a **UV Editor** (menú desplegable esquina superior izquierda)
3. En el UV Editor verás la textura del modelo

## Paso 4 — Seleccionar las caras de la pantalla

1. Vuelve al viewport 3D
2. Entra en **Edit Mode** (`Tab`)
3. Cambia a **Face Select** (icono del cuadrado en la barra superior, o pulsa `3`)
4. Pasa el cursor sobre la pantalla del portátil
5. Haz `L` (select linked) para seleccionar un island, o selecciona manualmente las caras de la pantalla haciendo click con `Shift` mantenido
6. En el **UV Editor** verás las coordenadas UV de las caras seleccionadas iluminadas en naranja

## Paso 5 — Pintar la nueva textura

**Opción A — Reemplazar la textura completa (más fácil):**

1. Ve al **Shader Editor** (otra ventana → Shader Editor)
2. Verás un nodo **Image Texture** con la textura actual
3. Click en el botón `Open` del nodo → selecciona tu nueva captura de LinkedIn
4. Ajusta el mapeo si es necesario

**Opción B — Pintar sobre la textura existente (más preciso):**

1. Con las caras de la pantalla seleccionadas en Edit Mode
2. Cambia al modo **Texture Paint** (menú superior del viewport)
3. En el panel lateral, elige tu imagen de LinkedIn como **Brush > Texture**
4. Pinta directamente sobre las caras de la pantalla
5. **Image > Save** para guardar los cambios en la textura

**Opción C — UV Mapping nuevo (lo más limpio):**

1. Con las caras de la pantalla seleccionadas
2. `U` → **Project from View** (alinea la cámara con la pantalla primero con `Numpad 1`)
3. En el UV Editor, carga tu imagen de LinkedIn
4. Ajusta las UVs para que cubran toda la imagen
5. Esto asigna una textura independiente solo a la pantalla

## Paso 6 — Exportar

1. Vuelve a **Object Mode** (`Tab`)
2. Selecciona el objeto
3. `File > Export > glTF 2.0 (.glb/.gltf)`
4. En las opciones de export:
   - Format: **glTF Binary (.glb)**
   - ✅ Include: Materials, Textures
5. Guarda como `desktop_pc.glb` en la carpeta `dist/`
6. Haz `npm run build` y redeploy a Vercel

---

## Tips

- Si la textura se ve invertida, en el UV Editor selecciona todas las UVs (`A`) y haz `S` → `Y` → `-1` para voltear verticalmente
- El modelo usa una sola textura atlas de 2048x2048 — toda la escena (mesa, lámpara, portátil) está en una sola imagen
- La pantalla ocupa múltiples "islas UV" en esa textura
