import { connect } from 'react-redux';
import Answer from './answer.component';

const mapStateToProps = state => ({
  word: state.app.word,
  guessedLetters: state.app.guessed,
});

export default connect(mapStateToProps)(Answer);
