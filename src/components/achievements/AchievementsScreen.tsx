import React from 'react';
import { Trophy, X } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';

interface AchievementsScreenProps {
  onClose: () => void;
}

export default function AchievementsScreen({ onClose }: AchievementsScreenProps) {
  const rewards = useGameStore((state) => state.rewards);
  const completedMissions = useGameStore((state) => state.completedMissions);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Achievements
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">
                Missions Completed
              </h3>
              <p className="text-2xl font-bold text-purple-600">
                {completedMissions.length}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Rewards Earned</h3>
              {rewards.length === 0 ? (
                <p className="text-gray-500">
                  Complete missions to earn rewards!
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {rewards.map((reward) => (
                    <div
                      key={reward.id}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <h4 className="font-semibold text-gray-800">
                        {reward.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {reward.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}