import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Index.module.css'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import api from '../services/api'
import axios from 'axios'
export default function Home() {
  const [ escope , setEscope ] = useState();

  // useEffect(() => {
  //   fillUnits()
  // },[])
  
  // async function fillUnits(){
  //   const names = await axios.get('localhost:30233/unit/', { params: {
  //     company_id: 'facd5d66888e30e72d13369',

  //   }})
  //   console.log(names);

  // }
  
  return (
    <>
     <Header/>
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.left}>
      <Sidebar/>
      </div>
      <div className={styles.right}>
      <Main escope={escope} setEscope={setEscope}/>
      </div>
      </div>

    </div>

    </>
  )
}

