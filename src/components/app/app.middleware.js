import { MAX_FAILS } from '../../shared/app-params';
import { KEY_PRESSED } from '../keyboard/keyboard.actions';
import { inArray } from '../../utils/helpers';
import { RESET, failure, success, gameOver, gameWin, fetchWord } from './app.actions';

const appMiddleware = store => next => (action) => {
  const { payload: letter } = action;
  const { word, fails, guessed, toGuess, gameOn } = store.getState().app;

  // if key pressed, game is on and letter wasn't clicked before
  if (action.type === KEY_PRESSED && gameOn && !inArray([...fails, ...guessed], letter)) {
    if (inArray(word, letter)) {
      if (guessed.length === toGuess.length - 1) {
        store.dispatch(gameWin());
      }

      store.dispatch(success(letter));
    } else {
      if (fails.length === MAX_FAILS - 1) {
        store.dispatch(gameOver());
      }

      store.dispatch(failure(letter));
    }
  }

  if (action.type === RESET) {
    store.dispatch(fetchWord());
  }

  next(action);
};

export default appMiddleware;

