import { message } from 'antd';

export const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

export const beforeUpload = (file) => {
  const isValidExt =
    file.type === 'image/jpeg' ||
    file.type === 'image/jpg' ||
    file.type === 'image/png' ||
    file.type === 'image/webp';
  if (!isValidExt) {
    message.error('Extensões permitidas jpeg, png, webp.');
  }
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error('Coloque uma imagem menor que 10 MB de tamanho.');
  }
  return isValidExt && isLt10M;
};
