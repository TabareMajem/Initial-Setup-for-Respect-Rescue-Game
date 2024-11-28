import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { missions } from '../../data/missions';
import MissionCard from './MissionCard';

export default function MissionScreen() {
  const currentMission = useGameStore((state) => state.currentMission);
  const completedMissions = useGameStore((state) => state.completedMissions);
  const setCurrentMission = useGameStore((state) => state.setCurrentMission);

  return (
    <div className="fixed inset-0 bg-white">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Missions</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {missions.map((mission) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              isCompleted={completedMissions.includes(mission.id)}
              isActive={currentMission?.id === mission.id}
              onSelect={() => setCurrentMission(mission)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}