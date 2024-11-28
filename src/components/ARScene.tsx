import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, Controllers, Hands } from '@react-three/xr';
import { Environment, OrbitControls } from '@react-three/drei';
import { useGameStore } from '../store/gameStore';
import AnimalModel from './ar/AnimalModel';
import InteractionLayer from './ar/InteractionLayer';
import TaskIndicator from './ar/TaskIndicator';
import MissionProgress from './ar/MissionProgress';
import XRInitializer from './ar/XRInitializer';
import LoadingScreen from './LoadingScreen';

export default function ARScene() {
  const currentMission = useGameStore((state) => state.currentMission);

  return (
    <>
      <XRInitializer />
      <Canvas camera={{ position: [0, 1.6, 3], fov: 50 }}>
        <XR referenceSpace="local">
          <Suspense fallback={null}>
            <Environment preset="sunset" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {currentMission && (
              <>
                <AnimalModel
                  animal={currentMission.animalFriend}
                  position={[0, 0, -2]}
                />
                <TaskIndicator position={[0, 1.5, -2]} />
                <MissionProgress />
              </>
            )}
            
            <InteractionLayer />
            <Controllers />
            <Hands />
          </Suspense>
          <OrbitControls />
        </XR>
      </Canvas>
      
      {!currentMission && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-gray-800">
              Please select a mission to begin the AR experience.
            </p>
          </div>
        </div>
      )}
    </>
  );
}