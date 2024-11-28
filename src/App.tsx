import React, { useState, Suspense } from 'react';
import StartScreen from './components/StartScreen';
import ARScene from './components/ARScene';
import TutorialScreen from './components/tutorial/TutorialScreen';
import AchievementsScreen from './components/achievements/AchievementsScreen';
import SettingsScreen from './components/settings/SettingsScreen';
import MissionScreen from './components/mission/MissionScreen';
import LoadingScreen from './components/LoadingScreen';

type GameState = 'start' | 'tutorial' | 'mission-select' | 'game' | 'achievements' | 'settings';

function App() {
  const [gameState, setGameState] = useState<GameState>('start');

  const handleStartGame = () => setGameState('mission-select');
  const handleOpenTutorial = () => setGameState('tutorial');
  const handleOpenAchievements = () => setGameState('achievements');
  const handleOpenSettings = () => setGameState('settings');
  const handleStartMission = () => setGameState('game');
  const handleClose = () => setGameState('start');

  return (
    <div className="w-full h-screen">
      <Suspense fallback={<LoadingScreen />}>
        {gameState === 'start' && (
          <StartScreen
            onStartGame={handleStartGame}
            onOpenTutorial={handleOpenTutorial}
            onOpenAchievements={handleOpenAchievements}
            onOpenSettings={handleOpenSettings}
          />
        )}
        {gameState === 'mission-select' && (
          <MissionScreen onMissionStart={handleStartMission} onClose={handleClose} />
        )}
        {gameState === 'game' && <ARScene />}
        {gameState === 'tutorial' && <TutorialScreen onClose={handleClose} />}
        {gameState === 'achievements' && (
          <AchievementsScreen onClose={handleClose} />
        )}
        {gameState === 'settings' && <SettingsScreen onClose={handleClose} />}
      </Suspense>
    </div>
  );
}

export default App;