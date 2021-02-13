import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/novacourtois/acab-colors" target="_blank"  rel="noreferrer noopenner">github</a>
      <div className={styles.text}>
        created by <a href="https://disregardingstandards.com/" target="_blank" rel="noreferrer noopenner">nova skye</a>
      </div>
    </div>
  );
};
