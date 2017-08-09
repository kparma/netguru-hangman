import { pushUnique, unique } from '../../utils/helpers';
import { GET_WORD, GET_WORD_SUCCESS, FAILURE, SUCCESS, GAME_OVER, GAME_WIN, RESET } from './app.actions';

export const initialState = {
  word: [],
  fails: [],
  guessed: [],
  toGuess: [],
  gameOver: false,
  gameWin: false,
  gameOn: true,
  loading: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORD:
      return {
        ...state,
        loading: true,
      };

    case GET_WORD_SUCCESS:
      return {
        ...state,
        word: action.payload.toLowerCase().split(''),
        toGuess: unique(action.payload.toLowerCase().split('')),
        loading: false,
      };

    case FAILURE:
      return {
        ...state,
        fails: pushUnique(state.fails, action.payload),
      };

    case SUCCESS:
      return {
        ...state,
        guessed: pushUnique(state.guessed, action.payload),
      };

    case GAME_OVER:
      return {
        ...state,
        gameOver: true,
        gameOn: false,
      };

    case GAME_WIN:
      return {
        ...state,
        gameWin: true,
        gameOn: false,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

export default appReducer;
