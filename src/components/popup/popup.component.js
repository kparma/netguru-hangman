import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './popup.scss';

class Popup extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    reset: PropTypes.func.isRequired,
  }

  static defaultProps = {
    message: 'Gave over',
    reset: () => {
    },
  }

  componentDidMount() {
    this.button.focus();
  }

  render() {
    const { message, reset } = this.props;

    return (
      <div className={styles.popup}>
        <h1 className={styles.popup__message}>{message}</h1>
        <button
          className={styles.popup__button}
          onClick={reset}
          ref={(btn) => { this.button = btn; }}
        >
          New word
        </button>
      </div>
    );
  }
}


export default Popup;
