import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.left}>
      <Sidebar/>
      </div>
      <div className={styles.right}>
      <Main/>
      </div>
      </div>

    </div>
  )
}
