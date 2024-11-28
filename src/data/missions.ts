import type { Mission } from '../types/game';
import { animals } from './animals';

export const missions: Mission[] = [
  {
    id: 'first-friend',
    title: 'Making Friends with Tanu',
    description: 'Help Tanu overcome his shyness and make new friends in the village.',
    difficulty: 'beginner',
    animalFriend: animals[0],
    tasks: [
      {
        id: 'approach',
        description: 'Approach Tanu gently to show you mean no harm',
        type: 'empathy',
        completed: false,
      },
      {
        id: 'listen',
        description: 'Listen to Tanu\'s concerns about meeting new friends',
        type: 'communication',
        completed: false,
      },
      {
        id: 'solution',
        description: 'Help Tanu think of ways to introduce himself to others',
        type: 'problem-solving',
        completed: false,
      },
    ],
    rewards: [
      {
        id: 'friendship-badge',
        type: 'badge',
        name: 'Friend Maker',
        description: 'Successfully helped an animal friend overcome shyness',
        unlocked: false,
      },
      {
        id: 'tanuki-dance',
        type: 'animation',
        name: 'Tanuki Dance',
        description: 'A special celebration dance with Tanu',
        unlocked: false,
      },
    ],
  },
];