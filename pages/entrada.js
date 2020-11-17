import { useState } from 'react';
import { Input, Button } from 'antd';
import { useRouter } from 'next/router';
import styles from '../styles/Entrada.module.css';

function Entrada() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState('5fb32dea4d4e580021df709c');
  const router = useRouter();

  async function authorization() {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_SERVER}/company?${new URLSearchParams({
        company_id: auth,
      })}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    setLoading(false);
    if (!response.ok) {
      alert('Companhia não encontrada');
    } else {
      const data = await response.json();

      localStorage.setItem('company', JSON.stringify(data));
      router.push({
        pathname: '/',
      });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/tractianblack.jpg" className={styles.logo} alt="" />
        <Input
          className={styles.input}
          value={auth}
          onChange={(e) => setAuth(e.target.value)}
          placeholder="Email do Colaborador"
        />
        <Input
          type="password"
          className={styles.input}
          value={auth}
          placeholder="Senha"
        />
        <Button
          loading={loading}
          type="primary"
          onClick={() => authorization()}
          className={styles.button}
        >
          {loading ? null : 'ENTRAR'}
        </Button>
      </div>
    </div>
  );
}

export default Entrada;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
