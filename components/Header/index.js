import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import {
  HomeOutlined,
  LogoutOutlined
} from '@ant-design/icons';
function Header() {
  return <div className={styles.container}>
            <Link href="/">
            <a>
               <img src="/tractian.webp" alt="Tractian Logo"/>
              </a></Link>
           
            <div>
              <HomeOutlined className={styles.icon_}/>
              <Link href="/entrada">
              <a >
              <LogoutOutlined className={styles.icon}/>
              </a></Link>
            </div>
         </div>;
}

export default Header;