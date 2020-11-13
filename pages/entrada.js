import React from 'react';
import { Input , Button } from 'antd'
import { useRouter } from 'next/router'
import styles from '../styles/Entrada.module.css';

function Entrada() {
  const router = useRouter();
  return <div className={styles.container}>
    <div className={styles.content}>
      <img src="/tractian.webp" className={styles.logo} alt=""/>
    <Input className={styles.input} placeholder="Email do Colaborador"></Input>
    <Input className={styles.input} placeholder="Senha"></Input>
    <Button onClick={() => router.push('/')} className={styles.button}>ENTRAR</Button>
    </div>
  </div>;
}

export default Entrada;