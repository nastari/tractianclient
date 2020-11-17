import { useEffect, useState } from 'react';
import { Menu, Drawer } from 'antd';
import styles from './styles.module.css';
import {
  useEscope,
  useMobile,
  useModal,
  useCompany,
  useUnits,
} from '../../context/Escope';

function Sidebar() {
  const { setEscope } = useEscope();
  const { visibleMobileSidebar, setVisibleMobileSidebar } = useMobile();
  const { setModal } = useModal();
  const { company } = useCompany();
  const { units, setUnits } = useUnits();

  useEffect(async () => {
    if (company) {
      getUnits(company._id);
    }
  }, [company]);

  async function getUnits(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/units?company_id=${id}`
    );
    const units_ = await res.json();

    // const units_ = [
    //   { name: 'unidade baixada' , id: '1242dsa213'},
    //   { name: 'unidade flamengo' , id:  '1213'}
    // ]

    setUnits(units_);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerSideBar}>
          <p className={styles.company}>{company && company.name}</p>
        </div>
        <Menu defaultSelectedKeys={['-1']} mode="inline">
          <Menu.Item
            onClick={() => setEscope(-1)}
            className={styles.menuitem}
            key="-1"
          >
            <img src="/polygon.svg" className={styles.menuIcon} />
            geral
          </Menu.Item>
          {units &&
            units.map((unit, key) => (
              <Menu.Item
                onClick={() => setEscope(key)}
                className={styles.menuitem}
              >
                <img src="/polygon.svg" className={styles.menuIcon} />
                {unit.name}
              </Menu.Item>
            ))}
          <Menu.Item
            className={styles.menuitem}
            onClick={() => setModal('create_unity')}
          >
            <img src="/+.svg" className={styles.menuIcon_} />
            criar unidade
          </Menu.Item>
          <Menu.Item
            className={styles.menuitem}
            onClick={() => setModal('create_company')}
          >
            <img src="/+.svg" className={styles.menuIcon_} />
            criar empresa
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.mobile}>
        <Drawer
          title={company && company.name}
          placement="left"
          closable={false}
          onClose={() => setVisibleMobileSidebar(false)}
          visible={visibleMobileSidebar}
        >
          <Menu defaultSelectedKeys={['-1']} mode="inline">
            <Menu.Item
              onClick={() => setEscope(-1)}
              className={styles.menuitem}
              key="-1"
            >
              <img src="/polygon.svg" className={styles.menuIcon} />
              geral
            </Menu.Item>
            {units &&
              units.map((unit, key) => (
                <Menu.Item
                  onClick={() => setEscope(key)}
                  className={styles.menuitem}
                >
                  <img src="/polygon.svg" className={styles.menuIcon} />
                  {unit.name}
                </Menu.Item>
              ))}
            <Menu.Item
              className={styles.menuitem}
              onClick={() => setModal('create_unity')}
            >
              <img src="/+.svg" className={styles.menuIcon_} />
              criar unidade
            </Menu.Item>
            <Menu.Item
              className={styles.menuitem}
              onClick={() => setModal('create_company')}
            >
              <img src="/+.svg" className={styles.menuIcon_} />
              criar empresa
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </>
  );
}

export default Sidebar;
