import React, { useState, useRef, useEffect } from 'react';
import { Menu } from 'antd';
import {
  FundOutlined,
  PlusCircleOutlined,
  CarryOutOutlined,
  UserOutlined,
  CaretDownOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import styles from './styles.module.css';
import MainSidebar from '../MainSidebar';
import MainInfo from '../MainInfo';
import Assets from '../Assets';
import NewUser from '../NewUser';
import NewAsset from '../NewAsset';
import Collaborators from '../Collaborators';
import {
  useEscope,
  useMobile,
  useUnits,
  useCompany,
} from '../../context/Escope';

function Main() {
  const fadeInRef = useRef();

  const { escope } = useEscope();
  const { setVisibleMobileSidebar } = useMobile();
  const [option, setOption] = useState('0');
  const [triggerOption, setTriggerOption] = useState(0);
  const { company } = useCompany();
  const [assets, setAssets] = useState();
  const { units } = useUnits();
  const [loading, setLoading] = useState(false);
  const handleChangeOption = (e) => setOption(e.key);

  useEffect(() => {
    setOption('0');
    setTriggerOption((c) => c + 1);
  }, [escope]);

  useEffect(() => (fadeInRef.current.style.opacity = 1), []);

  async function fetchData() {
    // geral escope
    if (escope === -1) {
      if (option === '0') {
        // grafico para find.all com id companhia
      }
      if (option === '1') {
        setLoading(true);
        const res = await fetch(
          `http://localhost:30233/asset?company_id=${company._id}`
        );
        const assetss = await res.json();

        setAssets(assetss);

        setLoading(false);
      }
      if (option === '2') {
        // setLoading(true);
        // const res = await fetch(
        //   `http://localhost:30233/asset?company_id=${company._id}`
        // );
        // const assets_ = await res.json();
        // setLoading(false);
      }
      if (option === '3') {
        // find.all dos colaboradores id da companhia
      }
    }

    // units escope
    if (escope !== -1) {
      if (option === '0') {
        // grafico para find.all com id companhia e id unidade
      }
      if (option === '1') {
        setLoading(true);
        const res = await fetch(
          `http://localhost:30233/asset?unit_id=${units[escope].id}`
        );
        const assetss = await res.json();
        setAssets(assetss);
        setLoading(false);
      }
      if (option === '2') {
        // criar ativo para id companhia e id unidade
      }
      if (option === '3') {
        console.log(units[escope]);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [option, triggerOption]);

  return (
    <div className={styles.container}>
      <div ref={fadeInRef} className={styles.content}>
        <div
          onClick={() => setVisibleMobileSidebar(true)}
          className={styles.top}
        >
          <img src="/polygon.svg" className={styles.icon} alt="Poligono" />
          <h2 className={styles.title}>
            {escope === -1 ? 'geral' : units[escope].name}
          </h2>
          <CaretDownOutlined className={styles.arrow} />
        </div>

        {escope === -1 ? (
          <Menu
            onClick={(e) => handleChangeOption(e)}
            selectedKeys={[option]}
            mode="horizontal"
          >
            <Menu.Item key="0" icon={<FundOutlined />}>
              Painel
            </Menu.Item>
            <Menu.Item key="1" icon={<CarryOutOutlined />}>
              Ativos
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusCircleOutlined />}>
              Criar usuário
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Colaboradores
            </Menu.Item>
          </Menu>
        ) : (
          <Menu
            onClick={(e) => handleChangeOption(e)}
            selectedKeys={[option]}
            mode="horizontal"
          >
            <Menu.Item key="0" icon={<FundOutlined />}>
              Painel
            </Menu.Item>
            <Menu.Item key="1" icon={<CarryOutOutlined />}>
              Ativos
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusCircleOutlined />}>
              Criar ativo
            </Menu.Item>
            <Menu.Item disabled key="3" icon={<ScheduleOutlined />}>
              Notificações
            </Menu.Item>
          </Menu>
        )}

        <div className={styles.infosContainer}>
          {option === '0' && (
            <>
              <div className={styles.left}>
                <MainInfo />
              </div>
              <div className={styles.right}>
                <MainSidebar />
              </div>
            </>
          )}

          {option === '1' && (
            <>
              <div className={styles.left}>
                <Assets loading={loading} data={assets} />
              </div>
              <div className={styles.right}>
                <MainSidebar />
              </div>
            </>
          )}
          {option === '2' && escope !== -1 && (
            <NewAsset unit={units[escope]} company={company} />
          )}
          {option === '2' && escope === -1 && <NewUser />}
          {option === '3' && escope === -1 && <Collaborators />}
        </div>
      </div>
    </div>
  );
}

export default Main;
