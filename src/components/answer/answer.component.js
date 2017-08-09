import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MAX_WORD_LENGTH } from '../../shared/app-params';
import { inArray } from '../../utils/helpers';
import styles from './answer.scss';

class Answer extends Component {
  static propTypes = {
    word: PropTypes.arrayOf(PropTypes.string).isRequired,
    guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    word: [],
    guessedLetters: [],
  }

  static renderLetter(letter, id, active = true) {
    if (active) {
      return <div key={id} className={styles.answer__letter}>{letter}</div>;
    }
    return <div key={id} className={styles['answer__letter--empty']} />;
  }

  renderWord() {
    const { guessedLetters } = this.props;
    const elements = new Array(MAX_WORD_LENGTH).fill('');
    const word = [...this.props.word];

    return elements.map((element, id) => {
      if (id < MAX_WORD_LENGTH - word.length) {
        return Answer.renderLetter('', id, false);
      }

      const letter = word.shift();
      if (inArray(guessedLetters, letter)) {
        return Answer.renderLetter(letter, id);
      }
      return Answer.renderLetter('', id);
    });
  }

  render() {
    return (
      <section className={styles.answer}>
        {this.renderWord()}
      </section>
    );
  }
}


export default Answer;
