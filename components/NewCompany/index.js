import React from 'react';
import { Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

function NewCompany({ setModal }) {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.h1}>Criar empresa</h1>
        <Input className={styles.input} placeholder="Nome da empresa" />
        <Button type="primary" className={styles.button}>
          Cadastrar empresa
        </Button>
        <CloseOutlined
          className={styles.close}
          onClick={() => setModal(false)}
        />
      </div>
    </>
  );
}

export default NewCompany;
