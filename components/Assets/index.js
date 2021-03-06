import { Card } from 'antd';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

const { Meta } = Card;
function Assets({ loading, data }) {
  return (
    <div className={styles.container}>
      {data &&
        data.map((asset) => (
          <Link href={`/ativo/${asset._id}`}>
            <a>
              <Card hoverable className={styles.card} loading={loading}>
                <Meta
                  avatar={
                    asset.healthscore < 60 ? (
                      <div
                        style={{ backgroundColor: '#ff00002c' }}
                        className={styles.circle}
                      >
                        {asset.healthscore}
                      </div>
                    ) : asset.healthscore > 60 && asset.healthscore < 79 ? (
                      <div
                        style={{ backgroundColor: '#ffa6002c' }}
                        className={styles.circle}
                      >
                        {asset.healthscore}
                      </div>
                    ) : (
                      <div className={styles.circle}>{asset.healthscore}</div>
                    )
                  }
                  title={asset.name}
                  description={
                    asset.status === 'AVAILABLE' ? 'DISPONÍVEL' : 'MANUNTENÇÃO'
                  }
                />
              </Card>
            </a>
          </Link>
        ))}
    </div>
  );
}

export default Assets;
