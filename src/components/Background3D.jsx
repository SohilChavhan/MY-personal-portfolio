import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Ocean() {
  const meshRef = useRef();
  
  // Custom shader for ocean could go here, but a basic moving displaced plane works nicely too.
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const positionAttribute = meshRef.current.geometry.attributes.position;
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const u = positionAttribute.getX(i);
        const v = positionAttribute.getY(i);
        // Simple wave math
        const z = Math.sin(u * 2 + time * 0.5) * 0.2 + Math.cos(v * 2 + time * 0.3) * 0.2;
        positionAttribute.setZ(i, z);
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshStandardMaterial 
        color="#0a1930" 
        metalness={0.9} 
        roughness={0.1}
      />
    </mesh>
  );
}

function Crystal() {
  const crystalRef = useRef();

  useFrame((state) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      crystalRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group position={[-2, 0, 0]}>
      {/* The Floating Glass Crystal */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={crystalRef}>
          <icosahedronGeometry args={[1.5, 0]} />
          {/* Use Drei's Transmission Material for awesome glass refraction */}
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
            attenuationDistance={1}
            attenuationColor="#4287f5"
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: true }}>
      <color attach="background" args={['#020611']} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#4287f5" />
      <directionalLight position={[-10, 10, -5]} intensity={1} color="#ffffff" />
      
      <Ocean />
      
      {/* Fallback environment to make reflections look good */}
      <Environment preset="city" />
      
      {/* React Suspense to handle texture loading */}
      <React.Suspense fallback={null}>
        <Crystal />
      </React.Suspense>
    </Canvas>
  );
}
