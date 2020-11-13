import React, { useState } from 'react';
import { Menu , Drawer, Button } from 'antd';
import styles from './styles.module.css';


function Sidebar({visibleMobileSidebar, onClose }) {



  return <>
    <div className={styles.container}>
    <div className={styles.headerSideBar}>
      <p className={styles.company}>
        Peugeot SA
      </p>
    </div>
    <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item style={{ fontWeight: 500 }} key="1">
            <img src="/polygon.svg" className={styles.menuIcon}/>geral
        </Menu.Item>
        <Menu.Item style={{ fontWeight: 500 }} >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade 1
        </Menu.Item>
        <Menu.Item style={{ fontWeight: 500 }} >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade 2
        </Menu.Item>
        <Menu.Item style={{ fontWeight: 500 }} >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade 2
        </Menu.Item>
        <Menu.Item style={{ fontWeight: 500 }} >
            <img src="/+.svg" className={styles.menuIcon_}/>criar unidade
        </Menu.Item>
        <Menu.Item style={{ fontWeight: 500 }} >
            <img src="/+.svg" className={styles.menuIcon_}/>criar empresa
        </Menu.Item>
      </Menu>
  </div>
  <div className={styles.mobile}>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        title="Peugeot SA"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visibleMobileSidebar}
      >

        <div className={styles.mobileLinha}>
        <img src="/polygon.svg" className={styles.menuIcon}/><p className={styles.mobileText}>geral</p>

        </div>
        <div className={styles.mobileLinha}>
        <img src="/polygon.svg" className={styles.menuIcon}/><p className={styles.mobileText}>unidade Baixada</p>

        </div>
        <div className={styles.mobileLinha}>
        <img src="/polygon.svg" className={styles.menuIcon}/><p className={styles.mobileText}>unidade Flamengo</p>

        </div>
      </Drawer>
    </div>
  </>;
}

export default Sidebar;