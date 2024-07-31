import * as Styled from './NoticeCard.style';
import Btn from '../../components/button/Button';

type noticeData ={
  date: string;
  day: string;
  button?:boolean;
  label?:string;
  onClick?:()=>void;
}

export default function NoticeCard({date, day, button=false, label, onClick}:noticeData){
  return(
  <Styled.SalaryCardBox>
    <h2><Styled.Orangetxt>{date}</Styled.Orangetxt>급여 명세서</h2>
      <h3>
        <p>정정 신청 기간입니다.</p>
        <p><Styled.Orangetxt>{day}</Styled.Orangetxt>까지 신청해주세요.</p>
      </h3>
      {button && 
        <Btn 
        btnsize='md' 
        size='lg' 
        label = {label || '라벨속성에라벨입력'}
        onClick={onClick} 
        />}
  </Styled.SalaryCardBox>
  )
}