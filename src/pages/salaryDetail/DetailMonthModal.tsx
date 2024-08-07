import BasicDialog from '../../components/modal/BasicModal';
import Btn from '../../components/button/Button';
import { CloseButton } from '../../components/modal/CloseButton';
import { useBasicModal } from '../../hooks/useBasicModal';
import * as styled from '../salaryAdjustment/SalaryAdjustment.style';
import Heading from '../../components/Heading/Heading';
import FormWrap from '../salaryAdjustment/FormWrap';
import dayjs from 'dayjs';

export default function SelectedModal({ day }: { day: string }) {
  const { open, handleOpen, handleClose } = useBasicModal();

  const today = dayjs();
  const payday = dayjs(day, 'YYYY.MM.DD');
  const isBeforeCurrentMonth = payday.isBefore(today, 'day');

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
      <styled.modalWrapper>
        <Heading title="급여 정정신청" />
        <h2 className="modal-title">{day.slice(0, 4)}월 급여 정정</h2>
        <FormWrap handleClose={() => handleClose()} />
      </styled.modalWrapper>
    </BasicDialog>
  );
}
