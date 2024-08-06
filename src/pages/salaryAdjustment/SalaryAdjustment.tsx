import Btn from '../../components/button/Button';
import AccordionList from './AccordionList';
import { useBasicModal } from '../../components/modal/useBasicModal';
import { CloseButton } from '../../components/modal/CloseButton';
import FormWrap from './FormWrap';
import Heading from '../../components/Heading/Heading';
import BasicDialog from '../../components/modal/BasicDialog';

import * as styled from './SalaryAdjustment.style';

function SalaryAdjustment() {
  const { open, handleOpen, handleClose } = useBasicModal();

  return (
    <styled.Wrapper>
      <Heading title="정정내역" />
      <styled.BtnArea>
        <BasicDialog
          modalOpenButton={
            <Btn label="정정신청" btnsize="md" onClick={handleOpen} sx={{ fontSize: '1.5rem' }} />
          }
          modalCloseButton={<CloseButton handleClose={handleClose} />}
          open={open}
        >
          <Heading title="급여 정정신청" />
          <styled.ModalTitle>03월 급여 정정</styled.ModalTitle>
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
      </styled.BtnArea>

      <AccordionList />
    </styled.Wrapper>
  );
}

export default SalaryAdjustment;
