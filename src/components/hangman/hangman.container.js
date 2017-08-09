import { connect } from 'react-redux';
import Hangman from './hangman.component';

const mapStateToProps = state => ({
  fails: state.app.fails.length,
});

export default connect(mapStateToProps)(Hangman);
