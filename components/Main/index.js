import React , { useState}  from 'react';
import { Menu } from 'antd';
import styles from './styles.module.css';
import { FundOutlined , PlusCircleOutlined , CarryOutOutlined , UserOutlined } from '@ant-design/icons';
import MainSidebar from '../MainSidebar'
import MainInfo from '../MainInfo'

function Main({ escope, setEscope }) {
  const [ current, SetCurrent ] = useState("1")
  const handleClick = (e) => {  
      SetCurrent(e.key)
  }
  

  return <div className={styles.container}>
    <div className={styles.content}>


    <div className={styles.top}>
        <img src="/polygon.svg" className={styles.icon} alt="Poligono"/>
        <h2 className={styles.title}>geral</h2>
    </div>

  
    <Menu onClick={(e) => handleClick(e)} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="1" icon={<FundOutlined />}>
                Painel
                </Menu.Item>
                <Menu.Item key="2" icon={<CarryOutOutlined />}>
                Ativos
                </Menu.Item>
                <Menu.Item key="3" icon={<PlusCircleOutlined />}>
                Criar usuário
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                Colaboradores
                </Menu.Item>
              </Menu>


          <div className={styles.infosContainer}>
              <div className={styles.left}>
                <MainInfo/>
              </div>
              <div className={styles.right}>
                <MainSidebar/>
              </div>
          </div>
        </div>
    </div>
}

export default Main;