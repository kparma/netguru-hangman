export const LOADED = 'hangman/app/LOADED';
export const RESET = 'hangman/app/RESET';
export const FAILURE = 'hangman/app/FAILURE';
export const SUCCESS = 'hangman/app/SUCCESS';
export const GAME_OVER = 'hangman/app/GAME_OVER';
export const GAME_WIN = 'hangman/app/GAME_WIN';
export const GET_WORD = 'hangman/app/GET_WORD';
export const GET_WORD_SUCCESS = 'hangman/app/GET_WORD_SUCCESS';
export const GET_WORD_FAILURE = 'hangman/app/GET_WORD_FAILURE';

export const loaded = () => ({
  type: LOADED,
});

export const reset = () => ({
  type: RESET,
});

export const failure = letter => ({
  type: FAILURE,
  payload: letter,
});

export const success = letter => ({
  type: SUCCESS,
  payload: letter,
});

export const gameOver = () => ({
  type: GAME_OVER,
});

export const gameWin = () => ({
  type: GAME_WIN,
});

export const requestWord = () => ({
  type: GET_WORD,
});

export const receiveWord = json => ({
  type: GET_WORD_SUCCESS,
  payload: json.word,
});

export const receiveWordError = err => ({
  type: GET_WORD_FAILURE,
  payload: err,
});

export const fetchWord = () => (dispatch) => {
  dispatch(requestWord());

  return fetch('http://api.wordnik.com:80/v4/words.json/randomWord?minCorpusCount=0&maxCorpusCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
    .then((response) => {
      response.json().then((body) => {
        dispatch(receiveWord(body));
      });
    })
    .catch((error) => {
      dispatch(receiveWordError(error));
    });
};
