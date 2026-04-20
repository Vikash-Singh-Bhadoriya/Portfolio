"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function AnimatedBackground() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() / 2) * 0.2;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.z = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} scale={3} position={[0, 0, -2]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#a855f7" wireframe opacity={0.5} transparent />
    </mesh>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedBackground />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
