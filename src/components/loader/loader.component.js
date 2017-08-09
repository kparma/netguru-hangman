import React from 'react';
import styles from './loader.scss';

const Loader = () => (
  <div className={styles.background}>
    <div className={styles.loader} />
  </div>
);

export default Loader;
