import Modal from '@mui/material/Modal';
import NavBar from '../nav/NavBar';
import React from 'react';
import { ModalProps } from '@mui/material';

interface BasicModalProps extends Omit<ModalProps, 'children'> {
  children?: React.ReactElement;
  modalOpenButton?: React.ReactElement;
  modalCloseButton?: React.ReactNode;
}

export default function BasicModal({
  children,
  modalOpenButton,
  modalCloseButton,
  ...props
}: BasicModalProps) {
  return (
    <div>
      {modalOpenButton}
      <Modal {...props}>
        <>
          {children}
          {modalCloseButton}
          <NavBar />
        </>
      </Modal>
    </div>
  );
}
