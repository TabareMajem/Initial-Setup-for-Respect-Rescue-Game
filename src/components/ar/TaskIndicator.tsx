import React, { useRef, useEffect } from 'react';
import { Text, Billboard } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { useGameStore } from '../../store/gameStore';

interface TaskIndicatorProps {
  position: [number, number, number];
}

export default function TaskIndicator({ position }: TaskIndicatorProps) {
  const groupRef = useRef<Group>(null);
  const { currentMission } = useGameStore();
  const currentTask = currentMission?.tasks.find(task => !task.completed);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(clock.getElapsedTime() * 2) * 0.001;
    }
  });

  if (!currentTask) return null;

  return (
    <group ref={groupRef} position={position}>
      <Billboard>
        <Text
          fontSize={0.2}
          maxWidth={2}
          lineHeight={1.2}
          textAlign="center"
          color="#4C1D95"
          outlineWidth={0.02}
          outlineColor="#ffffff"
        >
          {currentTask.description}
        </Text>
      </Billboard>
    </group>
  );
}