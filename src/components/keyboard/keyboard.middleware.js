import { LOADED } from '../app/app.actions';
import { keyPressed } from './keyboard.actions';

const keyboardMiddleware = store => next => (action) => {
  if (action.type === LOADED) {
    document.onkeydown = (e) => {
      const evt = e || window.event;

      if (evt.keyCode >= 65 && evt.keyCode <= 90) {
        store.dispatch(keyPressed(evt.key));
      }
    };
  }

  next(action);
};

export default keyboardMiddleware;

