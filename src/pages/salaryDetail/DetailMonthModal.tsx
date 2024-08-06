import BasicDialog from "../../components/modal/BasicModal"
import Btn from "../../components/button/Button"
import { CloseButton } from "../../components/modal/CloseButton"
import { useBasicModal } from "../../components/modal/useBasicModal"
import Heading from "../../components/Heading/Heading"
import FormWrap from "../salaryAdjustment/FormWrap"
import * as styled from '../salaryAdjustment/SalaryAdjustment.style';
import dayjs from "dayjs";

export default function SelectedModal({month}:{month:string}){
  const { open, handleOpen, handleClose } = useBasicModal();

  const today = dayjs();
  const payday = dayjs().month(parseInt(month, 10) - 1);
  const isBeforeCurrentMonth = payday.isBefore(today, 'month');

  if(isBeforeCurrentMonth){
    return null
  }
  
  return(
    <BasicDialog
      modalOpenButton={
        <Btn label="정정신청" btnsize="sm" onClick={handleOpen} sx={{ fontSize: '1.3rem' }} />
        }
      modalCloseButton={<CloseButton handleClose={handleClose} />}
      open={open}
      >
      <Heading title="급여 정정신청" />
      <styled.ModalTitle>{month}월 급여 정정</styled.ModalTitle>
      <FormWrap />
      <Btn
        label="취소"
        btnsize="sm"
        onClick={handleClose}
        sx={{ fontSize: '1.5rem', mr: '1rem' }}
        btntype="outlined"
      />
      <Btn label="확인" btnsize="md" onClick={handleClose} sx={{ fontSize: '1.5rem' }} />
  </BasicDialog>
  )
}