import React from 'react';
import { Input, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

function NewUnit({ setModal }) {
  return <>

  <div className={styles.content}>
    <h1 className={styles.h1}>Criar unidade</h1>
          <Input className={styles.input} placeholder="Nome da Unidade"></Input>
          <Button className={styles.button}>Cadastrar unidade</Button>
          <CloseOutlined className={styles.close} onClick={() => setModal(false)}/>

  </div>



  </>;
}

export default NewUnit;