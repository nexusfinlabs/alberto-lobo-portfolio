import * as THREE from "three";
import { OrbitControls, Preload, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../loader";

const Laptop = ({ isMobile }: { isMobile: boolean }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useLoader(THREE.TextureLoader, "/Alberto.png");

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        -0.35 + Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  const scale = isMobile ? 0.55 : 0.75;

  // Colours - Space Grey MacBook style
  const bodyColor = "#c8c8cc";
  const darkColor = "#0a0a0a";

  return (
    <group ref={groupRef} scale={scale} position={[0, -0.5, 0]}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow />
      <pointLight position={[-3, 4, 4]} intensity={0.5} color="#8ab4f8" />
      <pointLight position={[3, 2, -2]} intensity={0.3} color="#ffb088" />
      <pointLight position={[0, 2, 5]} intensity={0.8} />

      {/* === BASE — rounded MacBook-style === */}
      <RoundedBox args={[3.6, 0.08, 2.3]} radius={0.04} smoothness={4}
        position={[0, 0.04, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={bodyColor} metalness={0.9} roughness={0.15} />
      </RoundedBox>

      {/* Base bottom lip (thinner edge) */}
      <RoundedBox args={[3.55, 0.03, 2.25]} radius={0.015} smoothness={4}
        position={[0, -0.005, 0]}>
        <meshStandardMaterial color="#b0b0b5" metalness={0.9} roughness={0.15} />
      </RoundedBox>

      {/* Keyboard area */}
      <mesh position={[0, 0.085, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.0, 1.05]} />
        <meshStandardMaterial color={darkColor} metalness={0.1} roughness={0.85} />
      </mesh>

      {/* Trackpad — slightly glossy */}
      <mesh position={[0, 0.085, 0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 0.7]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* === LID — rounded, standing at 90° === */}
      <RoundedBox args={[3.6, 2.4, 0.05]} radius={0.04} smoothness={4}
        position={[0, 1.28, -1.15]} castShadow>
        <meshStandardMaterial color={bodyColor} metalness={0.9} roughness={0.15} />
      </RoundedBox>

      {/* Screen bezel (dark inset) */}
      <RoundedBox args={[3.3, 2.15, 0.02]} radius={0.03} smoothness={4}
        position={[0, 1.26, -1.1]}>
        <meshStandardMaterial color={darkColor} metalness={0.2} roughness={0.6} />
      </RoundedBox>

      {/* === SCREEN — LinkedIn image === */}
      <mesh position={[0, 1.26, -1.08]}>
        <planeGeometry args={[3.1, 2.0]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      {/* Camera notch (MacBook style) */}
      <RoundedBox args={[0.5, 0.12, 0.02]} radius={0.04} smoothness={4}
        position={[0, 2.37, -1.1]}>
        <meshStandardMaterial color={darkColor} metalness={0.3} roughness={0.5} />
      </RoundedBox>

      {/* Camera dot */}
      <mesh position={[0, 2.37, -1.08]}>
        <circleGeometry args={[0.025, 16]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Hinge strip */}
      <RoundedBox args={[3.2, 0.06, 0.08]} radius={0.025} smoothness={4}
        position={[0, 0.08, -1.12]}>
        <meshStandardMaterial color="#a8a8ad" metalness={0.95} roughness={0.1} />
      </RoundedBox>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [0, 2, 6], fov: 35 }}
      gl={{ preserveDrawingBuffer: true, alpha: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom enablePan maxPolarAngle={Math.PI} minPolarAngle={0} rotateSpeed={0.8} />
        <Laptop isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
