import { useState } from 'react';
import { Input, Button, Form, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import { useCompany } from '../../context/Escope';

const { Item } = Form;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isValidExt =
    file.type === 'image/jpeg' ||
    file.type === 'image/jpg' ||
    file.type === 'image/png' ||
    file.type === 'image/webp';
  if (!isValidExt) {
    message.error('Extensões permitidas jpeg, png, webp.');
  }
  const isLt20M = file.size / 1024 / 1024 < 20;
  if (!isLt20M) {
    message.error('Coloque uma imagem menor que 20 MB de tamanho.');
  }
  return isValidExt && isLt20M;
}

function NewUser() {
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const { company } = useCompany();

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

  const onFinish = async (values) => {
    setLoadingSubmit(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/user?company_id=${company._id}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          job: values.job,
        }),
      }
    );

    setLoadingSubmit(false);
    if (response.ok) {
      message.success('Colaborador criado com sucesso.');
    } else {
      message.warning('Erro ao criar colaborador.');
    }
  };

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
          <Item name="name">
            <Input
              className={styles.input}
              placeholder="Nome do Colaborador"
              type="text"
            />
          </Item>
          <Item name="job">
            <Input
              className={styles.input}
              placeholder="Cargo do Funcionário"
              type="text"
            />
          </Item>
          <Item className={styles.itemMobileButton}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loadingSubmit}
              className={styles.button}
            >
              {loadingSubmit ? '' : 'CADASTRAR'}
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
}

export default NewUser;
