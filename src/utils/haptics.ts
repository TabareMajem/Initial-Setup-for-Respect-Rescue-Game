export const triggerHapticFeedback = (type: 'success' | 'error' | 'warning') => {
  if (!navigator.vibrate) return;

  switch (type) {
    case 'success':
      navigator.vibrate([50]);
      break;
    case 'error':
      navigator.vibrate([100, 50, 100]);
      break;
    case 'warning':
      navigator.vibrate([75]);
      break;
  }
};