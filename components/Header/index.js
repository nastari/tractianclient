import React from 'react';

import styles from './styles.module.css';
import {
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';
function Header() {
  return <div className={styles.container}>
            <img src="/tractian.webp" alt="Tractian Logo"/>
            <div>
              <HomeOutlined className={styles.icon}/>
              <LogoutOutlined className={styles.icon}/>
            </div>
         </div>;
}

export default Header;