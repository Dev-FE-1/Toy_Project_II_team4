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
