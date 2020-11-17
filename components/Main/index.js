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
  const [option, setOption] = useState('GRAPHIC');
  const [triggerOption, setTriggerOption] = useState(0);
  const { company } = useCompany();
  const [assets, setAssets] = useState();
  const { units } = useUnits();
  const [loading, setLoading] = useState(false);

  useEffect(() => (fadeInRef.current.style.opacity = 1), []);

  const handleChangeOption = (e) => setOption(e.key);

  useEffect(() => {
    setOption('GRAPHIC');
    setTriggerOption((c) => c + 1);
  }, [escope]);

  async function fetchData() {
    // geral escope( company )

    if (escope === -1 && company) {
      if (option === 'GRAPHIC') {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL_SERVER}/asset?company_id=${company._id}`
        );
        const assetss = await res.json();

        setAssets(assetss);

        setLoading(false);
      }
      if (option === 'LIST_ASSET') {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL_SERVER}/asset?company_id=${company._id}`
        );
        const assetss = await res.json();

        setAssets(assetss);

        setLoading(false);
      }
      if (option === 'CREATE_USER') {
        //
      }
      if (option === 'LIST_USER') {
        //
      }
    }

    // units escope
    if (escope !== -1) {
      if (option === 'GRAPHIC') {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL_SERVER}/asset?unit_id=${units[escope].id}`
        );
        const assetss = await res.json();

        setAssets(assetss);
        setLoading(false);
      }
      if (option === 'LIST_ASSET') {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL_SERVER}/asset?unit_id=${units[escope].id}`
        );
        const assetss = await res.json();
        setAssets(assetss);
        setLoading(false);
      }
      if (option === 'CREATE_ASSET') {
        //
      }
      if (option === 'NOTIFICATIONS') {
        //
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
            <Menu.Item key="GRAPHIC" icon={<FundOutlined />}>
              Painel
            </Menu.Item>
            <Menu.Item key="LIST_ASSET" icon={<CarryOutOutlined />}>
              Ativos
            </Menu.Item>
            <Menu.Item key="CREATE_USER" icon={<PlusCircleOutlined />}>
              Criar usuário
            </Menu.Item>
            <Menu.Item key="LIST_USER" icon={<UserOutlined />}>
              Colaboradores
            </Menu.Item>
          </Menu>
        ) : (
          <Menu
            onClick={(e) => handleChangeOption(e)}
            selectedKeys={[option]}
            mode="horizontal"
          >
            <Menu.Item key="GRAPHIC" icon={<FundOutlined />}>
              Painel
            </Menu.Item>
            <Menu.Item key="LIST_ASSET" icon={<CarryOutOutlined />}>
              Ativos
            </Menu.Item>
            <Menu.Item key="CREATE_ASSET" icon={<PlusCircleOutlined />}>
              Criar ativo
            </Menu.Item>
            <Menu.Item disabled key="NOTIFICATIONS" icon={<ScheduleOutlined />}>
              Notificações
            </Menu.Item>
          </Menu>
        )}

        <div className={styles.infosContainer}>
          {option === 'GRAPHIC' && assets ? (
            <>
              <div className={styles.left}>
                <MainInfo data={assets} />
              </div>
              <div className={styles.right}>
                <MainSidebar />
              </div>
            </>
          ) : null}

          {option === 'LIST_ASSET' && (
            <>
              <div className={styles.left}>
                <Assets loading={loading} data={assets} />
              </div>
              <div className={styles.right}>
                <MainSidebar />
              </div>
            </>
          )}
          {option === 'CREATE_ASSET' && escope !== -1 && (
            <NewAsset unit={units[escope]} company={company} />
          )}
          {option === 'CREATE_USER' && escope === -1 && <NewUser />}
          {option === 'LIST_USER' && escope === -1 && <Collaborators />}
        </div>
      </div>
    </div>
  );
}

export default Main;
