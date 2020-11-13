
import { Card } from 'antd';
import  { useState, useRef ,useEffect }  from 'react';


import styles from './styles.module.css';

const { Meta } = Card;
function Assets() {
  
  const [ loading, setLoading ] = useState(true);
 
  setTimeout(() => {
    setLoading(false)
  },1000)


  const hss = [ 67,89,56,78,34,56,78,45,34,56 ]

  return <div className={styles.container}>
    { hss.map( hs => (
      <Card hoverable={true} className={styles.card} loading={loading}>
          <Meta
            avatar={ 
               hs < 60 ? <div style={{ backgroundColor: '#ff00002c'}} className={styles.circle}>
                    {hs}
                </div> :  hs >60 && hs < 79 ? <div style={{ backgroundColor: "#ffa6002c"}} className={styles.circle}>
                    {hs}
                </div> : <div className={styles.circle}>
                    {hs}
                </div> 
            }
            title="Prensa Hidraúlica"
            description="Prensa hidraúlica etc etc etc"
          />
        </Card>
    ))} 
     
    </div>;
}

export default Assets;