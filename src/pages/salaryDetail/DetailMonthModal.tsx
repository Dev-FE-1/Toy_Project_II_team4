import BasicDialog from '../../components/modal/BasicModal';
import Btn from '../../components/button/Button';
import { CloseButton } from '../../components/button/CloseButton';
import { useBasicModal } from '../../hooks/useBasicModal';
import Heading from '../../components/Heading/Heading';
import FormWrap from '../salaryAdjustment/FormWrap';
import dayjs from 'dayjs';
import styled from 'styled-components';

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

export default function SelectedModal({ month }: { month: string }) {
  const { open, handleOpen, handleClose } = useBasicModal();

  const today = dayjs();
  const payday = dayjs(month, 'YYYY.MM.DD');
  const isBeforeCurrentMonth = payday.isBefore(today, 'day');
  const salaryMonth = payday.subtract(1, 'month').format('MM');

  const currentMonth = today.month();
  const paydayMonth = payday.month();

  if (isBeforeCurrentMonth) {
    return null;
  }

  return (
    <BasicDialog
      modalOpenButton={
        currentMonth >= paydayMonth ? (
          <Btn label="정정신청" btnsize="sm" onClick={handleOpen} sx={{ fontSize: '1.3rem' }} />
        ) : undefined
      }
      modalCloseButton={<CloseButton handleClose={handleClose} />}
      open={open}
    >
      <ModalWrapper>
        <Heading title="급여 정정신청" />
        <h2 className="modal-title">{salaryMonth}월 급여 정정</h2>
        <FormWrap handleClose={() => handleClose()} />
      </ModalWrapper>
    </BasicDialog>
  );
}
