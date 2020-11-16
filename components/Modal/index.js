import { useRef, useEffect } from 'react';

import styles from './styles.module.css';

function Modal({ children }) {
  const fadeInRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      fadeInRef.current.style.opacity = 1;
    }, 0);
  }, []);

  return (
    <div ref={fadeInRef} style={{ opacity: 0 }} className={styles.container}>
      {children}
    </div>
  );
}

export default Modal;
