import { useState, useEffect } from 'react';
import { Input, Button, Select, Form, Upload /* message */ } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { getBase64, beforeUpload } from '../../support/files';
import styles from './styles.module.css';

const { Option } = Select;
const { TextArea } = Input;
const { Item } = Form;

function NewAsset({ unit, company }) {
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [message, setMessage] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [collabs, setCollabs] = useState();

  async function getCollaborators() {
    const res = await fetch(
      `http://localhost:30233/user?company_id=${company._id}`
    );
    const collabss = await res.json();
    setCollabs(collabss);
  }

  const onFinish = async (values) => {
    setLoadingSubmit(true);
    const response = await fetch('http://localhost:30233/asset', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        status: values.status,
        userOwner: values.owner,
        description: values.description,
        unit_id: unit.id,
        company_id: company._id,
        avatar_url: '...',
      }),
    });
    setLoadingSubmit(false);
    if (response.ok) {
      setMessage('CRIADO COM SUCESSO');
    } else {
      setMessage('FALHA AO CADASTRAR');
    }
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    getCollaborators();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={(e) => handleChange(e)}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
          ) : (
            uploadButton
          )}
        </Upload>
        <Form onFinish={onFinish} name="basic" className={styles.inputs}>
          <Item
            name="name"
            rules={[{ required: true, message: 'Insira o nome do maquinário' }]}
          >
            <Input
              className={styles.input}
              placeholder="Nome do Ativo"
              type="text"
            />
          </Item>
          <Item
            name="status"
            rules={[{ required: true, message: 'Selecione o status' }]}
          >
            <Select placeholder="STATUS DO ATIVO" className={styles.select}>
              <Option value="AVAILABLE">DISPONÍVEL</Option>
              <Option value="MAINTENANCE">EM MANUNTENÇÃO</Option>
              <Option value="DISABLED">DESATIVADO</Option>
            </Select>
          </Item>

          <Item
            name="owner"
            rules={[{ required: true, message: 'Selecione o responsável' }]}
          >
            <Select placeholder="RESPONSÁVEL" className={styles.select}>
              {collabs &&
                collabs.map((collab, key) => (
                  <Option value={collab._id} key={key}>
                    {collab.name}
                  </Option>
                ))}
            </Select>
          </Item>
          <Item
            name="description"
            rules={[{ required: true, message: 'Insira a descrição' }]}
          >
            <TextArea placeholder="Descrição" />
          </Item>
          <Item>
            <Button
              htmlType="submit"
              loading={loadingSubmit}
              type="primary"
              className={styles.button}
            >
              {loadingSubmit ? '' : 'CADASTRAR'}
            </Button>
          </Item>

          <small>{message && String(message)}</small>
        </Form>
      </div>
    </div>
  );
}

export default NewAsset;
