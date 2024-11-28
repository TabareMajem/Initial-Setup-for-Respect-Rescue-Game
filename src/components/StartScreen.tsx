import React from 'react';
import { Play, BookOpen, Trophy, Settings } from 'lucide-react';

interface StartScreenProps {
  onStartGame: () => void;
  onOpenTutorial: () => void;
  onOpenAchievements: () => void;
  onOpenSettings: () => void;
}

export default function StartScreen({
  onStartGame,
  onOpenTutorial,
  onOpenAchievements,
  onOpenSettings,
}: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
          Respect Rescue
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={onStartGame}
            className="w-full flex items-center justify-between px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <span className="text-lg font-semibold">Start Rescue</span>
            <Play className="h-6 w-6" />
          </button>
          
          <button
            onClick={onOpenTutorial}
            className="w-full flex items-center justify-between px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <span className="text-lg font-semibold">Tutorial</span>
            <BookOpen className="h-6 w-6" />
          </button>
          
          <button
            onClick={onOpenAchievements}
            className="w-full flex items-center justify-between px-6 py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
          >
            <span className="text-lg font-semibold">Achievements</span>
            <Trophy className="h-6 w-6" />
          </button>
          
          <button
            onClick={onOpenSettings}
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <span className="text-lg font-semibold">Settings</span>
            <Settings className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}