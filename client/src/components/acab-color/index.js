import React from 'react';
import styles from './acab-color.module.scss';

export default function AcabColor({color}) {
  return (
    <div className={styles.color} style={{'backgroundColor':`#${color.hex}`}}>
      <div className={styles.hex}>#{color.hex}</div>
    </div>
  );
};
