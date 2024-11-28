import React, { useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useXR, Interactive } from '@react-three/xr';
import { useGameStore } from '../../store/gameStore';
import { Vector3 } from 'three';
import { playSound } from '../../utils/sound';
import { triggerHapticFeedback } from '../../utils/haptics';
import ParticleSystem from '../effects/ParticleSystem';

export default function InteractionLayer() {
  const { currentMission } = useGameStore();
  const { isPresenting } = useXR();
  const { camera } = useThree();
  const [particlePosition, setParticlePosition] = useState<[number, number, number] | null>(null);
  
  const handleInteraction = (position: Vector3) => {
    if (!currentMission) return;
    
    const distance = camera.position.distanceTo(position);
    
    if (distance < 2) {
      const nextTask = currentMission.tasks.find(task => !task.completed);
      if (nextTask) {
        // Play sound effect
        playSound('interaction');
        
        // Trigger haptic feedback
        triggerHapticFeedback('success');
        
        // Show particles at interaction point
        setParticlePosition([position.x, position.y, position.z]);
        
        // Complete the task
        useGameStore.getState().completeTask(currentMission.id, nextTask.id);
        
        // Play completion sound
        playSound('taskComplete');
        
        // Clear particles after animation
        setTimeout(() => setParticlePosition(null), 1000);
      }
    }
  };

  return isPresenting ? (
    <>
      <Interactive onSelect={(e) => handleInteraction(e.intersection.point)}>
        <mesh visible={false}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </Interactive>
      
      {particlePosition && (
        <ParticleSystem
          count={50}
          position={particlePosition}
          color="#8B5CF6"
          size={0.05}
          spread={0.5}
          lifetime={1}
        />
      )}
    </>
  ) : null;
}