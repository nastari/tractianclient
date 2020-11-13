import React, { useState } from 'react';
import { Menu , Drawer, Button } from 'antd';
import styles from './styles.module.css';


function Sidebar({ setEscope, visibleMobileSidebar, onClose }) {



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
        <Menu.Item onClick={() => setEscope(0)} className={styles.menuitem} key="1">
            <img src="/polygon.svg" className={styles.menuIcon}/>geral
        </Menu.Item>
        <Menu.Item onClick={() => setEscope(1)} className={styles.menuitem} >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade Pavuna
        </Menu.Item>
        <Menu.Item onClick={() => setEscope(2)} className={styles.menuitem} >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade Baixada
        </Menu.Item>
        <Menu.Item onClick={() => setEscope(3)} className={styles.menuitem} >
            <img src="/polygon.svg" className={styles.menuIcon}/>unidade Flamengo
        </Menu.Item>
        <Menu.Item className={styles.menuitem} >
            <img src="/+.svg" className={styles.menuIcon_}/>criar unidade
        </Menu.Item>
        <Menu.Item className={styles.menuitem} >
            <img src="/+.svg" className={styles.menuIcon_}/>criar empresa
        </Menu.Item>
      </Menu>
  </div>
  <div className={styles.mobile}>
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