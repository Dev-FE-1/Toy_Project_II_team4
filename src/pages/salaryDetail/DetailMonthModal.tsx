import BasicDialog from "../../components/modal/BasicModal"
import Btn from "../../components/button/Button"
import { CloseButton } from "../../components/modal/CloseButton"
import { useBasicModal } from "../../components/modal/useBasicModal"
import * as styled from '../salaryAdjustment/SalaryAdjustment.style';
import Heading from "../../components/Heading/Heading"
import FormWrap from "../salaryAdjustment/FormWrap"
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
      <styled.modalWrapper>
      <Heading title="급여 정정신청" />
      <h2 className="modal-title">{month}월 급여 정정</h2>
      <FormWrap handleClose={() => handleClose()} />
      </styled.modalWrapper>
  </BasicDialog>
  )
}