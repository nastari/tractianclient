import { useState, useEffect } from 'react';
import { Input, Button, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useCompany } from '../../context/Escope';

function NewUnit({ setModal }) {
  const { company } = useCompany();
  const [nameUnit, setNameUnit] = useState('');

  async function createUnit() {
    if (nameUnit.length > 4 && nameUnit.length < 20) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_SERVER}/unit`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nameUnit,
            company: company._id,
          }),
        }
      );
      setModal(false);
      if (response.ok) {
        message.success('Unidade criada com sucesso.');
      } else {
        message.warning('Unidade não criada. Tente daqui a pouco.');
      }
    }
  }

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.h1}>Criar unidade</h1>
        <Input
          value={nameUnit}
          onChange={(e) => setNameUnit(e.target.value)}
          className={styles.input}
          placeholder="Nome da Unidade"
        />
        <Button
          onClick={() => createUnit()}
          type="primary"
          className={styles.button}
        >
          Cadastrar unidade
        </Button>

        <CloseOutlined
          className={styles.close}
          onClick={() => setModal(false)}
        />
      </div>
    </>
  );
}

export default NewUnit;
