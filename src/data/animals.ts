import type { AnimalCharacter } from '../types/game';

export const animals: AnimalCharacter[] = [
  {
    id: 'tanuki',
    name: 'Tanu',
    species: 'Tanuki',
    modelUrl: '/models/tanuki.glb',
    animations: ['idle', 'walk', 'wave'],
  },
  {
    id: 'crane',
    name: 'Tsuru',
    species: 'Crane',
    modelUrl: '/models/crane.glb',
    animations: ['idle', 'fly', 'dance'],
  },
  {
    id: 'fox',
    name: 'Kitsune',
    species: 'Fox',
    modelUrl: '/models/fox.glb',
    animations: ['idle', 'run', 'sit'],
  },
];