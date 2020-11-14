import React , { useState, useRef ,useEffect }  from 'react';
import { Menu } from 'antd';
import styles from './styles.module.css';
import { FundOutlined , PlusCircleOutlined , CarryOutOutlined , UserOutlined , CaretDownOutlined , ScheduleOutlined } from '@ant-design/icons';
import MainSidebar from '../MainSidebar'
import MainInfo from '../MainInfo'
import Assets from '../Assets'
import NewUser from '../NewUser'
import Collaborators from '../Collaborators'

function Main({ escope, showDrawer }) {
 
  const fadeInRef = useRef();

  const [ option , setOption ] = useState("0")

  const handleClick = (e) => {  
      setOption(e.key)
  }

  useEffect(() => {
      setOption("0")
  },[escope])

  useEffect(() => {
  fadeInRef.current.style.opacity = 1;
  },[])
  
  return <div className={styles.container}>
    <div ref={fadeInRef} className={styles.content}>


    <div onClick={() => showDrawer()} className={styles.top}>
        <img src="/polygon.svg" className={styles.icon} alt="Poligono"/>
        <h2 className={styles.title}>geral</h2>
        <CaretDownOutlined className={styles.arrow}/>
    </div>

    {escope === 0 ? 
     <Menu onClick={(e) => handleClick(e)} selectedKeys={[option]} mode="horizontal">
                <Menu.Item key="0" icon={<FundOutlined />}>
                Painel
                </Menu.Item>
                <Menu.Item key="1"  icon={<CarryOutOutlined />}>
                Ativos
                </Menu.Item>
                <Menu.Item key="2"   icon={<PlusCircleOutlined />}>
                Criar usuário
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                Colaboradores
                </Menu.Item>
              </Menu>
              : 
              <Menu onClick={(e) => handleClick(e)} selectedKeys={[option]} mode="horizontal">
              <Menu.Item key="0" icon={<FundOutlined />}>
              Painel
              </Menu.Item>
              <Menu.Item key="1"  icon={<CarryOutOutlined />}>
              Ativos
              </Menu.Item>
              <Menu.Item key="2" icon={<PlusCircleOutlined />}>
              Criar ativo
              </Menu.Item>
              <Menu.Item key="3" icon={<ScheduleOutlined />}>
              Notificações
              </Menu.Item>
            </Menu> }


          <div className={styles.infosContainer}>
             { option === "0" && <>
              <div className={styles.left}>
                  <MainInfo/>
              </div>
              <div className={styles.right}>
                <MainSidebar/>
              </div>
              </> } 

              { option === "1" && <>
              <div className={styles.left}>
                  <Assets/>
              </div>
              <div className={styles.right}>
                <MainSidebar/>
              </div>
              </> } 

              { option === "2" && <NewUser/>}
              { option === "3" && <Collaborators/>}
          </div>
        </div>
    </div>
}

export default Main;