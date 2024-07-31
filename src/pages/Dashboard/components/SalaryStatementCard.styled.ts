import styled from 'styled-components';
import { CardBox } from '../../../components/cardBox/CardBox.style';

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
