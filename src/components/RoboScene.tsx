import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const RoboObject = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.6]} />
        <meshPhongMaterial color="#00ff88" shininess={100} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhongMaterial color="#00ff88" shininess={100} />
      </mesh>

      {/* Left Eye */}
      <mesh position={[-0.12, 1.1, 0.3]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshPhongMaterial color="#ff00ff" emissive="#ff00ff" />
      </mesh>

      {/* Right Eye */}
      <mesh position={[0.12, 1.1, 0.3]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshPhongMaterial color="#ff00ff" emissive="#ff00ff" />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.6, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.7, 0.2]} />
        <meshPhongMaterial color="#0088ff" shininess={100} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.6, 0.5, 0]}>
        <boxGeometry args={[0.2, 0.7, 0.2]} />
        <meshPhongMaterial color="#0088ff" shininess={100} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-0.25, -0.8, 0]}>
        <boxGeometry args={[0.2, 0.7, 0.2]} />
        <meshPhongMaterial color="#0088ff" shininess={100} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.25, -0.8, 0]}>
        <boxGeometry args={[0.2, 0.7, 0.2]} />
        <meshPhongMaterial color="#0088ff" shininess={100} />
      </mesh>

      {/* Chest Accent */}
      <mesh position={[0, 0.2, 0.35]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshPhongMaterial color="#ff00ff" emissive="#ff00ff" />
      </mesh>

      {/* Left Antenna */}
      <mesh position={[-0.15, 1.3, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
        <meshPhongMaterial color="#ff00ff" emissive="#ff00ff" />
      </mesh>

      {/* Right Antenna */}
      <mesh position={[0.15, 1.3, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
        <meshPhongMaterial color="#00ff88" emissive="#00ff88" />
      </mesh>
    </group>
  );
};

export const Robo = () => {
  return (
    <div style={{ 
      width: "100%", 
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Canvas
        style={{ 
          width: "100%", 
          height: "100%",
          display: "block"
        }}
        camera={{ position: [0, 0, 3], fov: 50 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#00ff88" />
        <pointLight position={[5, 5, -5]} intensity={0.6} color="#0088ff" />
        <RoboObject />
      </Canvas>
    </div>
  );
};
