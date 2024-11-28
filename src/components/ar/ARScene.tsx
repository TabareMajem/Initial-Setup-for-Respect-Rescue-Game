import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, Controllers, Hands } from '@react-three/xr';
import { Environment, OrbitControls, useProgress } from '@react-three/drei';
import { useGameStore } from '../../store/gameStore';
import AnimalModel from './AnimalModel';
import InteractionLayer from './InteractionLayer';
import TaskIndicator from './TaskIndicator';
import MissionProgress from './MissionProgress';
import XRInitializer from './XRInitializer';
import LoadingScreen from '../LoadingScreen';

function LoadingProgress() {
  const { progress } = useProgress();
  
  useEffect(() => {
    if (progress === 100) {
      // All assets loaded
      console.log('All 3D assets loaded successfully');
    }
  }, [progress]);

  return null;
}

export default function ARScene() {
  const currentMission = useGameStore((state) => state.currentMission);

  return (
    <>
      <XRInitializer />
      <Canvas
        camera={{ position: [0, 1.6, 3], fov: 50 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <XR referenceSpace="local-floor">
          <Suspense fallback={<LoadingProgress />}>
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
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={0}
            />
          </Suspense>
        </XR>
      </Canvas>
      
      {!currentMission && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
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