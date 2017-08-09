import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from '../answer/answer.container';
import Fails from '../fails/fails.container';
import Hangman from '../hangman/hangman.container';
import Popup from '../popup/popup.container';
import Loader from '../loader/loader.component';
import styles from './app.scss';

class App extends Component {
  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    fetchWord: PropTypes.func.isRequired,
    gameOver: PropTypes.bool.isRequired,
    gameWin: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    gameOver: false,
    gameWin: false,
    loading: true,
  }

  componentDidMount() {
    this.props.onLoad();
    this.props.fetchWord();
  }

  render() {
    const { gameOver, gameWin, loading } = this.props;

    return (
      <section className={styles.app}>
        <div className={styles.app__content}>
          <Hangman />
          <Fails />
          <Answer />
          {gameOver && <Popup id="gameover" message="Game over" />}
          {gameWin && <Popup id="gamewin" message="Congratulations!" />}
          {loading && <Loader />}
        </div>
      </section>
    );
  }
}


export default App;
