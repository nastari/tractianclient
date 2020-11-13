import { useState, useEffect, useRef } from 'react'
import Header from '../../components/Header'
import styles from '../../styles/Index.module.css'
import Sidebar from '../../components/Sidebar'
import Asset from '../../components/Asset'
export default function Home() {
  const [ escope , setEscope ] = useState(0);

  //
  const [visibleMobileSidebar, setVisibleMobileSidebar] = useState(false);
  const showDrawer = () => setVisibleMobileSidebar(true);
  const onClose = () => setVisibleMobileSidebar(false);
  //

  return (
    <>
     <Header/>

      <div className={styles.content}>
        <div className={styles.left}>
            <Sidebar setEscope={setEscope} visibleMobileSidebar={visibleMobileSidebar} onClose={onClose}/>
        </div>
        <div className={styles.right}>
            <Asset/>
        </div>
      </div>
  </>
  )
}

