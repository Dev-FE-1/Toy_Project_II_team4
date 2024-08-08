import { CloseButton } from '../../components/modal/CloseButton';
import Heading from '../../components/Heading/Heading';
import Btn from '../../components/button/Button';
import FormWrap from './FormWrap';
import BasicDialog from '../../components/modal/BasicModal';
import { useBasicModal } from '../../hooks/useBasicModal';
import styled from 'styled-components';

function AdjustmentModal({ month, btnsize }: AdjustmentModalProps) {
  const { open, handleOpen, handleClose } = useBasicModal();

  return (
    <BasicDialog
      modalOpenButton={
        <Btn label="정정신청" btnsize={btnsize} onClick={handleOpen} sx={{ fontSize: '1.5rem' }} />
      }
      modalCloseButton={<CloseButton handleClose={handleClose} />}
      open={open}
    >
      <ModalWrapper>
        <Heading title="급여 정정신청" />
        <h2 className="modal-title">{month}월 급여 정정</h2>
        <FormWrap handleClose={() => handleClose()} />
      </ModalWrapper>
    </BasicDialog>
  );
}

export default AdjustmentModal;

interface AdjustmentModalProps {
  month: string;
  btnsize: 'sm' | 'md' | 'lg';
}

const ModalWrapper = styled.div`
  .modal-title {
    padding: 3rem 0;
    text-align: center;
    font-weight: bold;
  }
  .modal-btnArea {
    display: flex;
    justify-content: center;
  }
  .MuiSelect-select,
  .MuiInputBase-root,
  .MuiFormLabel-root {
    font-size: var(--font-size-small);
  }
`;
