import React from 'react';
import Link from 'next/link';
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

import { useModal } from '../../context/Escope';

function Header() {
  const { setModal } = useModal();
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <img src="/tractian.png" alt="Tractian Logo" />
        </a>
      </Link>

      <div>
        <HomeOutlined
          className={styles.icon_}
          onClick={() => setModal('update_company')}
        />
        <Link href="/entrada">
          <a>
            <LogoutOutlined className={styles.icon} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
