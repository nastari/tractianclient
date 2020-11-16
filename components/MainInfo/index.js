import React from 'react';
import ChartHealthscore from '../ChartHealthscore';
import styles from './styles.module.css';

function MainInfo({ data }) {
  return (
    <div className={styles.container}>
      <ChartHealthscore data={data} />
    </div>
  );
}

export default MainInfo;
