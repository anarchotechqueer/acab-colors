import React, { useState } from 'react';
import styles from './acab-color.module.scss';
import copyImg from '../../img/copy.svg';

console.log(styles);
export default function AcabColor({color}) {
  const [className, setClassName] = useState(styles.color);

  const handleCopy = (e, copyText) => {
    const text = `#${copyText}`;
    navigator.clipboard.writeText(text);

    setClassName(`${styles.color} ${styles.copied}`);

    setTimeout(() => {
      setClassName(styles.color);
    }, 275);
  };

  return (
    <div className={className} style={{'backgroundColor':`#${color.hex}`}}>
      <div className={styles.hex}>#{color.hex}</div>
      <button className={styles.copy} onClick={(e) => handleCopy(e, color.hex)}>
        <img src={copyImg} className={styles.copyImg} alt={`copy #${color.hex}` } />
      </button>
    </div>
  );
};
