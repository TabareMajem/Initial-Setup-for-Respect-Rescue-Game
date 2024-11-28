import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  count: number;
  position: [number, number, number];
  color: string;
  size?: number;
  spread?: number;
  lifetime?: number;
}

export default function ParticleSystem({
  count,
  position,
  color,
  size = 0.1,
  spread = 1,
  lifetime = 1,
}: ParticleSystemProps) {
  const mesh = useRef<THREE.Points>(null);
  const time = useRef(0);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * spread;
      temp[i * 3 + 1] = (Math.random() - 0.5) * spread;
      temp[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return temp;
  }, [count, spread]);

  useFrame((state, delta) => {
    time.current += delta;
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.2;
      mesh.current.position.y += Math.sin(time.current) * 0.01;
      
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time.current + i) * 0.01;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}