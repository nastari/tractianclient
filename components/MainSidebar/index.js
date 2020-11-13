import React from 'react';

import styles from './styles.module.css';

function MainSidebar() {
  return <div className={styles.container}>
    <div className={styles.section}>
      <div className={styles.ul}>Status</div>

      <div className={styles.li}>disponíveis

      <div className={styles.circle}>3</div>
      </div>


      <div className={styles.li}>em manuntenção
      <div className={styles.circle}>3</div></div>
      <div className={styles.li}>desativados
      <div className={styles.circle}>3</div></div>
    </div>
    <div className={styles.section}>
      <div className={styles.ul}>Saúde</div>
      <div className={styles.li}>estáveis
      <div className={styles.circle}>3</div></div>
      <div className={styles.li}>em alerta
      <div className={styles.circle}>3</div></div>
      <div className={styles.li}>críticos
      <div className={styles.circle}>2</div></div>
    </div>
  </div>;
}

export default MainSidebar;