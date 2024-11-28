import { create } from 'zustand';
import type { Mission, AnimalCharacter, Reward } from '../types/game';
import { playSound } from '../utils/sound';
import { triggerHapticFeedback } from '../utils/haptics';

interface GameState {
  currentMission: Mission | null;
  completedMissions: string[];
  unlockedCharacters: AnimalCharacter[];
  rewards: Reward[];
  setCurrentMission: (mission: Mission) => void;
  completeMission: (missionId: string) => void;
  completeTask: (missionId: string, taskId: string) => void;
  unlockCharacter: (character: AnimalCharacter) => void;
  addReward: (reward: Reward) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentMission: null,
  completedMissions: [],
  unlockedCharacters: [],
  rewards: [],
  
  setCurrentMission: (mission) => {
    playSound('interaction');
    set({ currentMission: mission });
  },
  
  completeTask: (missionId, taskId) => {
    set((state) => {
      if (!state.currentMission || state.currentMission.id !== missionId) return state;
      
      const updatedMission = {
        ...state.currentMission,
        tasks: state.currentMission.tasks.map(task =>
          task.id === taskId ? { ...task, completed: true } : task
        ),
      };
      
      const allTasksCompleted = updatedMission.tasks.every(task => task.completed);
      if (allTasksCompleted) {
        playSound('success');
        triggerHapticFeedback('success');
        
        updatedMission.rewards.forEach(reward => {
          if (!state.rewards.some(r => r.id === reward.id)) {
            get().addReward({ ...reward, unlocked: true });
          }
        });
        
        get().completeMission(missionId);
      }
      
      return { currentMission: updatedMission };
    });
  },
  
  completeMission: (missionId) =>
    set((state) => ({
      completedMissions: [...state.completedMissions, missionId],
    })),
    
  unlockCharacter: (character) =>
    set((state) => ({
      unlockedCharacters: [...state.unlockedCharacters, character],
    })),
    
  addReward: (reward) =>
    set((state) => ({
      rewards: [...state.rewards, reward],
    })),
}));