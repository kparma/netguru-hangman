import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './fails.scss';

class Fails extends Component {
  static propTypes = {
    fails: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    fails: [],
  }

  render() {
    return (
      <section className={styles.fails}>
        {this.props.fails.length ? <h2 className={styles.fails__heading}>You missed:</h2> : null}
        {this.props.fails.map(
          fail => (<h1 className={styles.fails__letter} key={fail}>{fail}</h1>),
        )}
      </section>
    );
  }
}


export default Fails;
