import { useState } from 'react';
import { Input , Button } from 'antd'
import { useRouter } from 'next/router'
import styles from '../styles/Entrada.module.css';

function Entrada() {
  const [ loading, setLoading ] = useState(false)
  const [ auth ,setAuth ]  = useState("5fb055259a438f3a74040baa")
  const router = useRouter();


  async function authorization(){
    // setLoading(true)
    // const response = await fetch('http://localhost:30233/company?' + new URLSearchParams({
    //   company_id: auth }), {
    //     method: 'GET', headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    // })
    // setLoading(false)
    // if(!response.ok){

      // alert('Companhia não encontrada')

    // } else {

      // const data = await response.json()


      const datacom = {
        "collaborators": [
          "5fb055259a438f3a74040ba9"
        ],
        "createdAt": "2020-11-14T22:07:04.405Z",
        "updatedAt": "2020-11-14T22:07:04.405Z",
        "_id": "5fb055259a438f3a74040baa",
        "name": "Ambev",
        "__v": 0
      }

      localStorage.setItem('company', JSON.stringify(datacom))
      router.push({
      pathname: '/',
      })
    // }

   
  }


  return <div className={styles.container}>
    <div className={styles.content}>
      <img src="/tractianblack.jpg" className={styles.logo} alt=""/>
    <Input className={styles.input} value={auth} onChange={(e) => setAuth(e.target.value)} placeholder="Email do Colaborador"></Input>
    <Input type="password" className={styles.input} value={auth} placeholder="Senha"></Input>
    <Button loading={loading} onClick={() => authorization()} className={styles.button}>{ loading ? null  :'ENTRAR'}</Button>
    </div>
  </div>;
}

export default Entrada;