import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Input , Button } from 'antd'

export default function Home() {
  return (
    <div>
      <h1>Teste</h1>
      <Input width={400} placeholder="oi tudo bom"></Input>
      <Button loading={true} style={{ background: 'orange', border: 0 , height: 90}}></Button>
    </div>
  )
}
