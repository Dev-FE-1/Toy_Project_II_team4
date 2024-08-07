import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { DialogProps } from '@mui/material';

interface BasicDialogProps extends Omit<DialogProps, 'children'> {
  children?: React.ReactNode;
  modalOpenButton?: React.ReactElement;
  modalCloseButton?: React.ReactNode;
  title?: string;
}

export default function BasicDialog({
  children,
  modalOpenButton,
  modalCloseButton,
  title,
  ...props
}: BasicDialogProps) {
  return (
    <div>
      {modalOpenButton}
      <Dialog {...props}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>{children}</DialogContent>
        <DialogActions>{modalCloseButton}</DialogActions>
      </Dialog>
    </div>
  );
}

// BasicDialog 컴포넌트 사용방법
// 1. import BasicDialog from './components/modal/BasicModal';
// 2.

/* <BasicDialog 
  open={open} 
  modalOpenButton = {
    <Btn label="정정신청" 
    btnsize="md" 
    onClick={handleOpen}  
    sx={{ fontSize: '1.5rem' }} />
      } 
  modalCloseButton={
      <CloseButton handleClose={handleClose} />
  }> */
// useBasicDialog 커스텀훅에서 open, handleClose, handleopen 상태와 함수를 정의하고, 이를 BasicDialog 컴포넌트에 전달해야함.
