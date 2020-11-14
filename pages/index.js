import { useEffect } from 'react'
import Header from '../components/Header'
import styles from '../styles/Index.module.css'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import ModalConcern from '../components/ModalConcerny'
import { useCompany } from '../context/Escope'
// import { useCounter } from '../context/Escope'

export default function Home() {
  const { setCompany } = useCompany()
  useEffect(() => {
      setCompany(localStorage.getItem('company_id'))
  },[])

  return (
    <>
     <Header/>
      <div className={styles.content}>
        <div className={styles.left}>
            <Sidebar/>
        </div>
        <div className={styles.right}>
            <Main/>
        </div>
      </div>
      <ModalConcern/>
  </>
  )
}



// export async function getStaticProps( ctx ){

//   console.log(ctx)
//   const res = await fetch(`http://localhost:30233/units?company_id=${company_id}`)
//   const units = await res.json()

//   console.log(units);

//   return {
//     props: {
//       units,
//     },
//   }

// }