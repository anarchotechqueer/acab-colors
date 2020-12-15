import React from 'react';
import styles from './grid.module.scss';

import AcabColor from '../acab-color';
import {acabColors} from '../../data/acab-colors.js';
import {test} from '../../data/acab-colors.js';

export default function Grid() {
  return (
    <>
    <div className={styles.grid}>
    {
      test.colors.map((c, i) => {
          return <AcabColor key={i} color={c} />
      })
    }
    </div>
    </>
  );
};
