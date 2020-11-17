import { useState, useEffect } from 'react';
import { Input, Button, Form, message, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

const { Item } = Form;

function NewCompany({ setModal }) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [id, setId] = useState();

  const onFinish = async (values) => {
    setLoadingSubmit(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/company`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameCompany: values.name_company,
          nameCollaborator: values.name_collaborator,
        }),
      }
    );

    setLoadingSubmit(false);
    setModal(false);

    if (response.ok) {
      const data = await response.json();

      const args = {
        message: 'Logue com sua nova Companhia',
        description: `Copie e cole o código ${data._id} como usuário e senha na página inicial.`,
        duration: 0,
      };
      notification.open(args);

      message.success('Colaborador criado com sucesso.');
    } else {
      message.warning('Erro ao criar colaborador.');
    }
  };

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.h1}>Criar empresa</h1>
        <Form onFinish={onFinish} name="basic" className={styles.inputs}>
          <Item name="name_collaborator">
            <Input className={styles.input} placeholder="Nome do Responsável" />
          </Item>

          <Item name="name_company">
            <Input className={styles.input} placeholder="Nome da empresa" />
          </Item>
          <Item>
            <Button
              type="primary"
              loading={loadingSubmit}
              htmlType="submit"
              className={styles.button}
            >
              {loadingSubmit ? '' : 'CADASTRAR'}
            </Button>
          </Item>
        </Form>
        <CloseOutlined
          className={styles.close}
          onClick={() => setModal(false)}
        />
      </div>
    </>
  );
}

export default NewCompany;
