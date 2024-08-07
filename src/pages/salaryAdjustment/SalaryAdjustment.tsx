import Btn from '../../components/button/Button';
import AccordionList from './AccordionList';
import { useBasicModal } from '../../hooks/useBasicModal';
import { CloseButton } from '../../components/modal/CloseButton';
import FormWrap from './FormWrap';
import Heading from '../../components/Heading/Heading';
import BasicDialog from '../../components/modal/BasicModal';

import * as styled from './SalaryAdjustment.style';

function SalaryAdjustment() {
  const { open, handleOpen, handleClose } = useBasicModal();

  return (
    <styled.Wrapper>
      <Heading title="정정내역" />
      <div className="btnArea">
        <BasicDialog
          modalOpenButton={
            <Btn label="정정신청" btnsize="md" onClick={handleOpen} sx={{ fontSize: '1.5rem' }} />
          }
          modalCloseButton={<CloseButton handleClose={handleClose} />}
          open={open}
        >
          <styled.modalWrapper>
            <Heading title="급여 정정신청" />
            <h2 className="modal-title">07월 급여 정정</h2>
            <FormWrap handleClose={() => handleClose()} />
          </styled.modalWrapper>
        </BasicDialog>
      </div>

      <AccordionList />
    </styled.Wrapper>
  );
}

export default SalaryAdjustment;
