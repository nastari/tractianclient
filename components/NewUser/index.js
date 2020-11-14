import React from 'react';
import { Input , Button} from 'antd'
import styles from './styles.module.css';

function NewUser() {

  return <div className={styles.container}> 
    <div className={styles.content}>
    
    <label className={styles.label} htmlFor="avatar" id="label">
                          <img className={styles.avatar} 
                          src={"/user.svg"} 
                          alt="Foto do Usuário" />
                          <Input
                            className={styles.avatarInput}
                            type="file"
                            id="avatar"
                            // onChange={ e => handleShowStorie(e)}
                          />
              </label>
        <div className={styles.inputs}>
          <Input className={styles.input}  placeholder="Nome do Colaborador" type="text"></Input>
          <Input className={styles.input} placeholder="Cargo do Funcionário" type="text"></Input>
        </div>
    </div>
    <Button className={styles.button}>CADASTRAR</Button>
  </div>;
}

export default NewUser;