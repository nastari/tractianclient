import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import styles from '../styles/Index.module.css'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

import { useCounter } from '../context/Escope'

export default function Home() {

  // const { count, setCount } = useCounter();
  return (
    <>
     <Header/>
     {/* {count} */}
     {/* <button onClick={() => setCount( c => c + 1 )}>AUMENTAR</button> */}
      <div className={styles.content}>
        <div className={styles.left}>
            <Sidebar/>
        </div>
        <div className={styles.right}>
            <Main/>
        </div>
      </div>
  </>
  )
}

