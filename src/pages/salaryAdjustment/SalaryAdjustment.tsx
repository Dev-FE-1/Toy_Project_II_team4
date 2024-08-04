import Btn from '../../components/button/Button';
import AccordionList from './AccordionList';
import BasicModal from '../../components/modal/BasicModal';
import { useBasicModal } from '../../components/modal/useBasicModal';
import { CloseButton } from '../../components/modal/CloseButton';
import FormWrap from './FormWrap';
import Heading from '../../components/Heading';
import BasicDialog from '../../components/modal/BasicDialog';

import * as styled from './SalaryAdjustment.style';

const datas = [
  {
    title: '04월 급여명세서/경비누락',
    details: { date: '2024.04.25', state: '결재대기', note: '비고', reason: '반려사유 입니다.' },
  },
  {
    title: '03월 급여명세서/경비누락',
    details: { date: '2024.03.25', state: '결재완료', note: '비고', reason: '반려사유 입니다.' },
  },
  {
    title: '02월 급여명세서/경비누락',
    details: { date: '2024.02.25', state: '반려', note: '비고', reason: '반려사유 입니다.' },
  },
  {
    title: '01월 급여명세서/경비누락',
    details: { date: '2024.01.25', state: '결재완료', note: '비고', reason: '반려사유 입니다.' },
  },
];
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
      {datas.map((data, i) => (
        <AccordionList key={i} title={data.title} details={data.details} />
      ))}
    </styled.Wrapper>
  );
}
export default SalaryAdjustment;
