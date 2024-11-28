import React from 'react';
import { Html } from '@react-three/drei';
import { useGameStore } from '../../store/gameStore';

export default function MissionProgress() {
  const { currentMission } = useGameStore();
  
  if (!currentMission) return null;
  
  const completedTasks = currentMission.tasks.filter(task => task.completed).length;
  const totalTasks = currentMission.tasks.length;
  
  return (
    <Html position={[0, 2, -2]} center>
      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <div className="text-sm font-medium text-gray-800 mb-1">
          Mission Progress
        </div>
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-600 mt-1">
          {completedTasks} of {totalTasks} tasks completed
        </div>
      </div>
    </Html>
  );
}