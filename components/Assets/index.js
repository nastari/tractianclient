import { useState } from 'react';
import { Card, Avatar } from 'antd';

import styles from './styles.module.css';

const { Meta } = Card;
function Assets() {

  const [ loading, setLoading ] = useState(false)

  return <div className={styles.container}>
     <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>

        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
        <Card loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
    </div>;
}

export default Assets;