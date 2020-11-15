import { useEffect, useState } from 'react';
import { Menu , Drawer } from 'antd';
import styles from './styles.module.css';
import { useEscope , useMobile, useModal , useCompany } from '../../context/Escope'

function Sidebar() {

  const { setEscope  } = useEscope()
  const { visibleMobileSidebar , setVisibleMobileSidebar } = useMobile()
  const { setModal } = useModal();
  const { company } = useCompany();
  const [ units, setUnits ] = useState([])

  useEffect( async () => {
    if(company) 
    {
      console.log('embaixo a data receive do index');
      console.log(company);
      getUnits(company._id)
    }
    },[company])

  async function getUnits(id){
      const res = await fetch(`http://localhost:30233/units?company_id=${id}`)
      const units_ = await res.json()
      setUnits(units_)
  }



  return <>
    <div className={styles.container}>
    <div className={styles.headerSideBar}>
      <p className={styles.company}>
        {company ? company.name : null }
      </p>
    </div>
    <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item onClick={() => setEscope(0)} className={styles.menuitem} key="1">
            <img src="/polygon.svg" className={styles.menuIcon}/>geral
        </Menu.Item>
        { units && units.map( unit => (
                  <Menu.Item onClick={() => setEscope( n => n + 1 )} className={styles.menuitem} >
            <img src="/polygon.svg" className={styles.menuIcon}/>{unit.name}
        </Menu.Item>
        ))}
        <Menu.Item className={styles.menuitem} onClick={() => setModal("create_unity")}>
            <img src="/+.svg" className={styles.menuIcon_}/>criar unidade
        </Menu.Item>
        <Menu.Item className={styles.menuitem} onClick={() => setModal("create_company")}>
            <img src="/+.svg" className={styles.menuIcon_}/>criar empresa
        </Menu.Item>
      </Menu>
  </div>
  <div className={styles.mobile}>
      <Drawer
        title="Peugeot SA"
        placement="left"
        closable={false}
        onClose={() => setVisibleMobileSidebar(false)}
        visible={visibleMobileSidebar}
      >

          <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          >
        <Menu.Item onClick={() => setEscope(0)} className={styles.menuitem} key="1">
            <img src="/polygon.svg" className={styles.menuIcon}/>geral
        </Menu.Item>
        {units && units.map( unit => (
                  <Menu.Item onClick={() => setEscope( n => n + 1 )} className={styles.menuitem} >
            <img src="/polygon.svg" className={styles.menuIcon}/>{unit.name}
        </Menu.Item>
        ))}
        <Menu.Item className={styles.menuitem} onClick={() => setModal("create_unity")}>
            <img src="/+.svg" className={styles.menuIcon_}/>criar unidade
        </Menu.Item>
        <Menu.Item className={styles.menuitem} onClick={() => setModal("create_company")}>
            <img src="/+.svg" className={styles.menuIcon_}/>criar empresa
        </Menu.Item>
      </Menu>
      </Drawer>
    </div>
  </>;
}

export default Sidebar;