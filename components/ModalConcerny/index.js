import React from 'react';
import Modal from '../Modal';
import CompanySettings from '../CompanySettings';
import NewCompany from '../NewCompany';
import NewUnit from '../NewUnit';
import { useModal } from '../../context/Escope';

function ModalConcerny() {
  const { modal, setModal } = useModal();

  return (
    <>
      {modal === 'create_unity' ? (
        <Modal>
          <NewUnit setModal={setModal} />
        </Modal>
      ) : null}

      {modal === 'create_company' ? (
        <Modal>
          <NewCompany setModal={setModal} />
        </Modal>
      ) : null}

      {modal === 'update_company' ? (
        <Modal>
          <CompanySettings setModal={setModal} />
        </Modal>
      ) : null}
    </>
  );
}

export default ModalConcerny;
