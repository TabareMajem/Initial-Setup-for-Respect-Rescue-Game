import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import type { AnimalCharacter } from '../../types/game';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimalModelProps {
  animal: AnimalCharacter;
  position?: [number, number, number];
}

export default function AnimalModel({ 
  animal,
  position = [0, 0, 0],
}: AnimalModelProps) {
  const group = useRef<THREE.Group>();
  const { scene, animations } = useGLTF(animal.modelUrl) as GLTF;
  const { actions, names } = useAnimations(animations, group);
  
  // Clone the scene to avoid sharing materials between instances
  const modelScene = React.useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  useEffect(() => {
    // Play idle animation by default
    if (names.includes('idle')) {
      const action = actions['idle'];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }
    }
    
    return () => {
      // Cleanup animations
      Object.values(actions).forEach((action) => action?.stop());
    };
  }, [actions, names]);

  useFrame((state, delta) => {
    if (group.current) {
      // Add subtle breathing animation
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  return (
    <group ref={group} position={position}>
      <primitive object={modelScene} />
    </group>
  );
}

// Preload models
useGLTF.preload('/models/tanuki.glb');
useGLTF.preload('/models/crane.glb');
useGLTF.preload('/models/fox.glb');