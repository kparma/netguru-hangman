import appMiddleware from './app.middleware';
import { initialState } from './app.reducer';
import { reset, fetchWord, success, failure, gameOver } from './app.actions';
import { keyPressed } from '../keyboard/keyboard.actions';

describe('App middleware', () => {
  let fakeStore;
  let fakeNext;

  beforeEach(() => {
    fakeNext = jest.fn();

    fakeStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        app: {
          word: ['t', 'e', 's', 't'],
          fails: [],
          guessed: [],
          toGuess: ['t', 'e', 's'],
          gameOn: true,
        }
      })),
    };
  });

  it('does nothing', () => {
    appMiddleware(fakeStore)(fakeNext)({
      type: 'FOO',
    });

    expect(fakeNext).toBeCalledWith({
      type: 'FOO',
    });
  });

  it('adds letter with success', ()=> {
    appMiddleware(fakeStore)(fakeNext)(keyPressed('t'));
    expect(fakeStore.dispatch).toBeCalledWith(success('t'));
  });

  it('adds failed letter', ()=> {
    appMiddleware(fakeStore)(fakeNext)(keyPressed('a'));
    expect(fakeStore.dispatch).toBeCalledWith(failure('a'));
  });

})
