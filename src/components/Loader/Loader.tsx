import React from 'react';
import styles from './Loader.module.css';

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className={styles.loader}>
      <span className={styles.circle}></span>
      <span className={styles.text}>Loading</span>
    </div>
  );
}
