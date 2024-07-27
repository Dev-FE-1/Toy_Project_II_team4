import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import * as Styled from './BasicModal.style';

interface BasicModalProps {
  nav?: JSX.Element;
  children?: React.ReactNode[];
}

export default function BasicModal({ nav, children }: BasicModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Styled.ModalContent>
          <Styled.closeButton onClick={handleClose}>
            <CloseIcon />
          </Styled.closeButton>
          <Styled.ModalChildrenContent>
            {Array.isArray(children)
              ? children.map((child, index) => <Styled.Wrapper key={index}>{child}</Styled.Wrapper>)
              : children}
          </Styled.ModalChildrenContent>
          {nav || ''}
        </Styled.ModalContent>
      </Modal>
    </div>
  );
}
