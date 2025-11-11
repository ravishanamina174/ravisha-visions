import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RoboMesh = ({ groupRef }: { groupRef: React.RefObject<THREE.Group> }) => {
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]} scale={[0.8, 1, 0.6]}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#00ff88" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.2, 0]} scale={[0.6, 0.6, 0.6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00ff88" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 1.3, 0.35]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.15, 1.3, 0.35]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
      </mesh>

      {/* Left Arm */}
      <group position={[-0.6, 0.8, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.3]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[0.25, 0.6, 0.25]} />
          <meshStandardMaterial
            color="#0088ff"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.6, 0.8, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.3]} />
          <meshStandardMaterial
            color="#00ff88"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <boxGeometry args={[0.25, 0.6, 0.25]} />
          <meshStandardMaterial
            color="#0088ff"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Left Leg */}
      <mesh position={[-0.3, -0.8, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#0088ff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.3, -0.8, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#0088ff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Chest Accent */}
      <mesh position={[0, 0.4, 0.45]}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
        <meshStandardMaterial color="#ff00ff" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Antenna */}
      <mesh position={[-0.2, 1.4, 0]}>
        <boxGeometry args={[0.05, 0.6, 0.05]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.2, 1.4, 0]}>
        <boxGeometry args={[0.05, 0.6, 0.05]} />
        <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

export const Robo = () => {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 3], fov: 45 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 5]} intensity={0.8} color="#00ff88" />
        <pointLight position={[5, 5, -10]} intensity={0.6} color="#0088ff" />
        <RoboMesh groupRef={groupRef} />
      </Canvas>
    </div>
  );
};
