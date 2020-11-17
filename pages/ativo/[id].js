import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card, Breadcrumb, Menu, Avatar } from 'antd';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import {
  LineChartOutlined,
  HomeOutlined,
  ToolOutlined,
  EditOutlined,
  EllipsisOutlined,
  PieChartOutlined,
  FolderOutlined,
  StarOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import ModalConcern from '../../components/ModalConcerny';

import Header from '../../components/Header';
import styles from '../../styles/Ativo.module.css';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

export default function Home({ asset }) {
  const [option, setOption] = useState('GRAPHIC');
  const handleChangeOption = (e) => setOption(e.key);

  const random = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  const options = {
    title: {
      text: 'Healthscore em tempo real',
    },

    subtitle: {
      text: 'Índice de saúde do maquinário',
    },

    yAxis: {
      title: {
        text: 'Saúde de 0 a 100',
      },
    },

    xAxis: {
      accessibility: {
        // rangeDescription: 'Range: 13/04 to 21/04',
      },
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        // name: 'HealthScore',
        data: [...random(10, 100), asset.healthscore],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Breadcrumb>
          <Link href="/">
            <a>
              <Breadcrumb.Item>
                <HomeOutlined />
              </Breadcrumb.Item>
            </a>
          </Link>

          <Breadcrumb.Item>
            <ToolOutlined />
            <span style={{ cursor: 'pointer' }}>{asset.name}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Menu
          onClick={(e) => handleChangeOption(e)}
          selectedKeys={[option]}
          mode="horizontal"
          className={styles.menu}
        >
          <Menu.Item key="GRAPHIC" icon={<LineChartOutlined />}>
            Tempo real
          </Menu.Item>
          <Menu.Item key="LIST_ASSET" icon={<PieChartOutlined />}>
            Análises
          </Menu.Item>
          <Menu.Item key="CREATE_USER" icon={<FolderOutlined />}>
            Histórico
          </Menu.Item>
          <Menu.Item key="LIST_USER" icon={<StarOutlined />}>
            Insights
          </Menu.Item>
        </Menu>
        <div className={styles.content}>
          <div className={styles.left}>
            <Card
              className={styles.cardPC}
              hoverable
              cover={<img alt="example" src="/maquina.png" />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Card.Meta title={asset.name} description={asset.description} />
            </Card>

            <Card className={styles.cardMOBILE}>
              <Card.Meta
                avatar={<Avatar src="/maquina.png" />}
                title={asset.name}
                description={asset.description}
              />
            </Card>
          </div>
          <div className={styles.right}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
      <ModalConcern />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const assetPromise = await fetch(
    `https://tractianserver.herokuapp.com/one_asset?id=${id}`
  );

  const asset = await assetPromise.json();

  return {
    props: {
      asset: asset[0],
    }, // will be passed to the page component as props
  };
}
