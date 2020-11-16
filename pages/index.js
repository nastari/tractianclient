import { useEffect } from 'react';
import Header from '../components/Header';
import styles from '../styles/Index.module.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import ModalConcern from '../components/ModalConcerny';
import { useCompany } from '../context/Escope';

export default function Home() {
  const { setCompany } = useCompany();

  useEffect(() => {
    setCompany(JSON.parse(localStorage.getItem('company')));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        <div className={styles.right}>
          <Main />
        </div>
      </div>
      <ModalConcern />
    </>
  );
}
