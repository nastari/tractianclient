import { useState } from 'react';
import { Input , Button } from 'antd'
import { useRouter } from 'next/router'
import styles from '../styles/Entrada.module.css';

function Entrada() {
  const [ auth ,setAuth ]  = useState("5fb055259a438f3a74040baa")
  const router = useRouter();


  async function authorization(){

    const response = await fetch('http://localhost:30233/company?' + new URLSearchParams({
      company_id: auth }), {
        method: 'GET', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })

    if(!response.ok){

      alert('Companhia não encontrada')

    } else {

      const data = await response.json()

      console.log(data);
      console.log('entrada data receive');

      localStorage.setItem('company', JSON.stringify(data))

      router.push({
      pathname: '/',
      })
    }

   
  }


  return <div className={styles.container}>
    <div className={styles.content}>
      <img src="/tractianblack.jpg" className={styles.logo} alt=""/>
    <Input className={styles.input} value={auth} onChange={(e) => setAuth(e.target.value)} placeholder="Email do Colaborador"></Input>
    <Input type="password" className={styles.input} value={auth} placeholder="Senha"></Input>
    <Button onClick={() => authorization()} className={styles.button}>ENTRAR</Button>
    </div>
  </div>;
}

export default Entrada;