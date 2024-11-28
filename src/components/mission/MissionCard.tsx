import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import type { Mission } from '../../types/game';

interface MissionCardProps {
  mission: Mission;
  isCompleted: boolean;
  isActive: boolean;
  onSelect: () => void;
}

export default function MissionCard({
  mission,
  isCompleted,
  isActive,
  onSelect,
}: MissionCardProps) {
  return (
    <div
      className={`p-6 rounded-xl shadow-md transition-all cursor-pointer
        ${isActive ? 'ring-2 ring-purple-500 bg-purple-50' : 'bg-white hover:shadow-lg'}
        ${isCompleted ? 'opacity-75' : ''}`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{mission.title}</h3>
        {isCompleted && (
          <CheckCircle className="h-6 w-6 text-green-500" />
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{mission.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700 capitalize">
            {mission.difficulty}
          </span>
        </div>
        
        <div className="text-sm text-gray-500">
          {mission.tasks.length} tasks
        </div>
      </div>
    </div>
  );
}