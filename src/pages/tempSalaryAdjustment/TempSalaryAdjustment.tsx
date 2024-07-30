import Heading from '../../components/Heading/Heading';
import Btn from '../../components/button/Button';
import AccordionList from '../../components/salaryAdjustment/AccordionList';
import BasicModal from '../../components/modal/BasicModal';
import SelectBox from '../../components/selectBox/SelectBox';

import * as styled from './TempSalaryAdjustment.style';
import SDataPicker from '../../components/datepicker/DatePicker';

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
  const onAdjustment = () => {
    alert('asa');
  };
  return (
    <styled.Wrapper>
      <Heading title="정정 내역" />
      <styled.BtnArea>
        <Btn label="정정신청" btnsize="md" onClick={onAdjustment} />
      </styled.BtnArea>
      {datas.map((data) => (
        <AccordionList title={data.title} details={data.details} />
      ))}

      <BasicModal>
        <styled.ModalWrapper>
          <Heading title="급여 정정신청" />
          <h3>03월 급여 정정 신청</h3>
          <SelectBox
            labelId="labelCate"
            id="cate"
            label="카테고리"
            menuItems={[
              { text: '주말 / 공휴일 근무 수당', value: 'cate1' },
              { text: '야간 근무 수당(22:00-06:00)', value: 'cate2' },
              { text: '연차 누락', value: 'cate3' },
              { text: '경비 처리', value: 'cate4' },
            ]}
          />

          <styled.STextInput label="제목" variant="outlined" />

          <SDataPicker dateType="range" />
        </styled.ModalWrapper>
      </BasicModal>
    </styled.Wrapper>
  );
}
export default SalaryAdjustment;
