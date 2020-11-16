import { useState } from 'react';
import { Input, Button, Form, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

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
  const [message, setMessage] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        // console.log(image_url);  aqui ta vindo url base 64
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
    setLoading(true);
    const response = await fetch('http://localhost:30233/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        jobDescription: values.job,
      }),
    });
    setLoading(false);
    if (response.ok) {
      setMessage('CRIADO COM SUCESSO');
    } else {
      setMessage('FALHA AO CADASTRAR');
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
            <Button type="primary" className={styles.button}>
              CADASTRAR
            </Button>
            {message ? String(message) : null}
          </Item>
        </Form>
      </div>
    </div>
  );
}

export default NewUser;
