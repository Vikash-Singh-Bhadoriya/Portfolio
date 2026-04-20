"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SpinningCube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#a855f7" />
    </mesh>
  );
}

export default function Interactive3D() {
  return (
    <div className="w-full h-72 md:h-96 rounded-2xl border border-purple-500 overflow-hidden bg-black">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
