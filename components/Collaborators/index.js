import { Card, Avatar } from 'antd';
import React, { useState, useRef, useEffect } from 'react';

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import styles from './styles.module.css';

const { Meta } = Card;
function Collaborators() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const hss = [67, 89, 56, 78, 34, 56, 78, 45, 34, 56];

  return (
    <div className={styles.container}>
      {hss.map((hs) => (
        <Card
          hoverable
          className={styles.card}
          loading={loading}
          actions={[
            <EditOutlined key="update" />,
            <DeleteOutlined key="delete" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="/user.svg" />}
            title="Mauro Pereira"
            description="Assistente Técnico"
          />
        </Card>
      ))}
    </div>
  );
}

export default Collaborators;
