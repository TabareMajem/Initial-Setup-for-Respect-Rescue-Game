export type AnimalCharacter = {
  id: string;
  name: string;
  species: string;
  modelUrl: string;
  animations: string[];
};

export type Mission = {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  animalFriend: AnimalCharacter;
  tasks: Task[];
  rewards: Reward[];
};

export type Task = {
  id: string;
  description: string;
  type: 'empathy' | 'communication' | 'problem-solving';
  completed: boolean;
};

export type Reward = {
  id: string;
  type: 'badge' | 'item' | 'animation';
  name: string;
  description: string;
  unlocked: boolean;
};

export type TutorialStep = {
  id: string;
  content: string;
  image: string;
};

export type Tutorial = {
  id: string;
  title: string;
  steps: TutorialStep[];
};