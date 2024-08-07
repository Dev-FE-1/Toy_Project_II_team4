import * as Styled from './NoticeCard.style';
import Btn from '../../components/button/Button';
import { SalaryDataItem } from './api/fetchSalaryInfo';
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

type noticeData = {
  salaryList? : Array<SalaryDataItem> 
  button?: boolean;
  label?: React.ReactNode;
};


export default function NoticeCard({ salaryList=[], button = false, label}: noticeData) {
  const navigate = useNavigate() 

  const handleApplicationBtn = (id:number) => {
    if(salaryList.find((item) => item.id === id)){
      navigate(`/salary-detail/${id}`)
    }else{
          console.error('급여 명세서가 없습니다.')
    }
  }

  if (salaryList.length === 0) {
    return (
      <Styled.SalaryCardBox>
        <h2>급여명세서</h2>
        <p>급여 명세서가 없습니다.</p>
      </Styled.SalaryCardBox>
    );
  }

  const firstPayData = salaryList[0]
  const originDate = dayjs(firstPayData.payday,'YYYY.MM.DD')
  const finalDate = originDate.format('MM월 ')
  const finalDay = originDate.subtract(2,'day').format('DD일')
  
  return (
    <Styled.SalaryCardBox>
      <h2>
        <Styled.Orangetxt>{finalDate}</Styled.Orangetxt>급여명세서
      </h2>
      <h6 className='imoge'>✉️</h6>
      <h3>
        <p>정정 신청 기간입니다.</p> 
        <p>
          <Styled.Orangetxt>{finalDay}</Styled.Orangetxt>까지 신청해주세요.
        </p>
      </h3>
      {button && <Btn btnsize="md" size="lg" label={label || <></>} onClick={()=>handleApplicationBtn(firstPayData.id)} />}
    </Styled.SalaryCardBox>
  );
}
