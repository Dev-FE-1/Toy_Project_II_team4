import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Button from '/src/components/button/Button.styled';
import { useNavigate } from 'react-router-dom';
import * as Styled from './SalaryStatementCard.styled';

export default function SalaryStatementCard() {
  const navigate = useNavigate();

  const goToSalaryPage = () => {
    navigate(`/salary-detail/3`);
  };

  return (
    <Styled.SalaryStatementCardWrapper>
      <Styled.SalaryStatementTitle>
        <Styled.SalaryStatementImpact>2023년 03월</Styled.SalaryStatementImpact> 급여명세서
      </Styled.SalaryStatementTitle>
      <Styled.SalaryStatementDescription>
        <div>정정 신청 기간입니다.</div>
        <div>
          <Styled.SalaryStatementImpact>23일</Styled.SalaryStatementImpact>까지 신청해주세요.
        </div>
      </Styled.SalaryStatementDescription>
      <Button btnsize="lg" onClick={() => goToSalaryPage()}>
        <Styled.ButtonWrapper>
          <ListOutlinedIcon />
          급여명세서 조회
        </Styled.ButtonWrapper>
      </Button>
    </Styled.SalaryStatementCardWrapper>
    
  );
}
