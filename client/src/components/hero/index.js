import React from 'react';
import styles from './hero.module.scss';

export default function Hero({color}) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        <span>ACAB</span> colors
      </h1>
      <div className={styles.text}>
        <p>an extensive list of all colors containing <span>"ACAB"</span> or <span>"1312"</span></p>
        <p>so your designs can hate cops as much as u</p>
      </div>
    </div>
  );
};
