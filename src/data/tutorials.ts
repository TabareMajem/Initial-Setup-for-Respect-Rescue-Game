import { Tutorial } from '../types/game';

export const tutorials: Tutorial[] = [
  {
    id: 'intro',
    title: 'Welcome to Respect Rescue',
    steps: [
      {
        id: 'welcome',
        content: "Welcome to Respect Rescue! Here you'll learn to help animal friends while developing important social skills.",
        image: 'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?auto=format&fit=crop&q=80&w=1024',
      },
      {
        id: 'controls',
        content: 'Use simple gestures to interact with your animal friends. Tap to select, swipe to move, and pinch to zoom.',
        image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=1024',
      },
      {
        id: 'missions',
        content: 'Complete rescue missions to help animals overcome challenges while learning about empathy and respect.',
        image: 'https://images.unsplash.com/photo-1557431177-36141475c676?auto=format&fit=crop&q=80&w=1024',
      },
    ],
  },
];