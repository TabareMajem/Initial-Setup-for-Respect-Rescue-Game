import { Howl } from 'howler';

const sounds = {
  taskComplete: new Howl({
    src: ['/sounds/task-complete.mp3'],
    volume: 0.5,
  }),
  interaction: new Howl({
    src: ['/sounds/interaction.mp3'],
    volume: 0.3,
  }),
  success: new Howl({
    src: ['/sounds/success.mp3'],
    volume: 0.6,
  }),
};

export const playSound = (soundName: keyof typeof sounds) => {
  const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
  if (soundEnabled) {
    sounds[soundName].play();
  }
};