import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import NavBar from '../nav/NavBar';
import { IF } from '../../utils/IFElse';
import React from 'react';
import { CloseButton } from './CloseButton';
import { useBasicModal } from './useBasicModal';

interface BasicModalProps {
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
  const { open, handleOpen, handleClose } = useBasicModal();

  return (
    <div>
      <IF condition={!!modalOpenButton}>
        <IF.Then>{modalOpenButton}</IF.Then>
        <IF.Else>
          <Button onClick={handleOpen}>Open modal</Button>
        </IF.Else>
      </IF>
      <Modal {...props} open={open} onClose={handleClose}>
        <>
          <IF condition={!!children}>
            <IF.Then>{children}</IF.Then>
            <IF.Else>""</IF.Else>
          </IF>
          <IF condition={!!modalCloseButton}>
            <IF.Then>{modalCloseButton}</IF.Then>
            <IF.Else>
              <CloseButton handleClose={handleClose} />
            </IF.Else>
          </IF>
          <NavBar />
        </>
      </Modal>
    </div>
  );
}
