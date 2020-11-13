import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import styles from '../styles/Index.module.css'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
export default function Home() {
  const [ escope , setEscope ] = useState();

  const [visibleMobileSidebar, setVisibleMobileSidebar] = useState(false);

  const showDrawer = () => {
    setVisibleMobileSidebar(true);
  };

  const onClose = () => {
    setVisibleMobileSidebar(false);
  };


  return (
    <>
     <Header/>
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.left}>
      <Sidebar visibleMobileSidebar={visibleMobileSidebar}
               onClose={onClose}/>
      </div>
      <div className={styles.right}>
      <Main escope={escope} setEscope={setEscope} showDrawer={showDrawer}/>
      </div>
      </div>

    </div>

    </>
  )
}

