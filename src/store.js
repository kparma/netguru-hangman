import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './components/app/app.reducer';
import appMiddleware from './components/app/app.middleware';
import keyboardMiddleware from './components/keyboard/keyboard.middleware';

const mainReducer = combineReducers({
  app: appReducer,
});

const store = createStore(
  mainReducer,
  compose(
    applyMiddleware(
      keyboardMiddleware,
      appMiddleware,
      thunkMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default store;
