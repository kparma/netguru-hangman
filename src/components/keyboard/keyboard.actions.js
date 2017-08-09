export const KEY_PRESSED = 'hangman/keyboard/KEY_PRESSED';

export const keyPressed = key => ({
  type: KEY_PRESSED,
  payload: key,
});
