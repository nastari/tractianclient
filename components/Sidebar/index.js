import React from 'react';
import { Menu } from 'antd';
import styles from './styles.module.css';


function Sidebar() {
  return <div>
    <div className={styles.headerSideBar}>
      <p className={styles.company}>
        Peugeot SA
      </p>
    </div>
    <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1">
            <img src="/polygon.svg" className={styles.menuIcon}/>geral
        </Menu.Item>
        <Menu.Item >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade 1
        </Menu.Item>
        <Menu.Item >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade 2
        </Menu.Item>
        <Menu.Item >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade 2
        </Menu.Item>
        <Menu.Item >
            <img src="/+.svg" className={styles.menuIcon_}/>criar unidade
        </Menu.Item>
        <Menu.Item >
            <img src="/+.svg" className={styles.menuIcon_}/>criar empresa
        </Menu.Item>
      </Menu>
  </div>;
}

export default Sidebar;