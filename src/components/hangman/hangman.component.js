import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './hangman.scss';

class Folk extends PureComponent {
  static propTypes = {
    fails: PropTypes.number.isRequired,
  };

  static defaultProps = {
    fails: 0,
  };

  render() {
    const { fails } = this.props;

    return (
      <figure className={styles.hangman}>
        <div className={styles.hangman__gallows} />
        {fails >= 1 && <div id="head" className={styles.hangman__head} />}
        {fails >= 2 && <div id="neck" className={styles.hangman__neck} />}
        {fails >= 3 && <div id="torso" className={styles.hangman__torso} />}
        <div className={styles['hangman__arm--right']}>
          {fails >= 4 && <div id="arm-right" className={styles['hangman__forearm--right']} />}
          {fails >= 6 && <div id="hand-right" className={styles.hangman__hand} />}
        </div>
        <div className={styles['hangman__arm--left']}>
          {fails >= 5 && <div id="arm-left" className={styles['hangman__forearm--left']} />}
          {fails >= 7 && <div id="hand-left" className={styles.hangman__hand} />}
        </div>
        <div className={styles['hangman__leg--right']}>
          {fails >= 8 && <div id="leg-right" className={styles.hangman__thigh} />}
          {fails >= 10 && <div id="foot-right" className={styles['hangman__foot--right']} />}
        </div>
        <div className={styles['hangman__leg--left']}>
          {fails >= 9 && <div id="leg-left" className={styles.hangman__thigh} />}
          {fails >= 11 && <div id="foot-left" className={styles['hangman__foot--left']} />}
        </div>
      </figure>
    );
  }
}

export default Folk;
