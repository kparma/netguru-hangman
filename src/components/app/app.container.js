import { connect } from 'react-redux';
import { loaded, fetchWord } from './app.actions';
import App from './app.component';

const mapSateToProps = state => ({
  gameOver: state.app.gameOver,
  gameWin: state.app.gameWin,
  loading: state.app.loading,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(loaded()),
  fetchWord: () => dispatch(fetchWord()),
});

export default connect(
  mapSateToProps,
  mapDispatchToProps,
)(App);
