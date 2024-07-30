import styled from 'styled-components';
import { CardBox } from '../../components/cardBox/CardBox.style';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Button from '/src/components/button/Button.styled';

export default function SalaryStatementCard() {
  return (
    <SalaryStatementCardWrapper>
      <SalaryStatementTitle>
        <SalaryStatementImpact>2023년 03월</SalaryStatementImpact> 급여명세서
      </SalaryStatementTitle>
      <SalaryStatementDescription>
        <div>정정 신청 기간입니다.</div>
        <div>
          <SalaryStatementImpact>23일</SalaryStatementImpact>까지 신청해주세요.
        </div>
      </SalaryStatementDescription>
      <Button btnsize="lg">
        <ButtonWrapper>
          <ListOutlinedIcon />
          급여명세서 조회
        </ButtonWrapper>
      </Button>
    </SalaryStatementCardWrapper>
  );
}

export const SalaryStatementCardWrapper = styled(CardBox)`
  height: 21rem;
  margin: 1rem 0;
  border: 5px solid var(--color-pri);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font-pri);
`;

export const SalaryStatementTitle = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const SalaryStatementDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;

  & div:last-child {
    margin-bottom: 2rem;
  }
`;

export const SalaryStatementImpact = styled.span`
  color: var(--color-pri);
  font-size: 2.4rem;
`;
export const ButtonWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;

  & svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
