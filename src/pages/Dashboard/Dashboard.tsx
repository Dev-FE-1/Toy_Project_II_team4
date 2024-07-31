import Heading from '../../components/Heading/Heading';
import ProfileCard from './components/ProfileCard';
import CalendarCard from './components/CalendarCard';
import SalaryStatementCard from './components/SalaryStatementCard';
import styled from 'styled-components';

function Dashboard() {
  return (
    <>
      <Heading title="대시보드" />
      <ProfileCard />
      <CalendarCard />
      <SalaryStatementCard />
      <SalaryCardBox>
        <h2>
          <Orangetxt>2023년 07월</Orangetxt>급여 명세서
        </h2>
        <h4>
          <p>정정 신청 기간입니다.</p>
          <p>
            <Orangetxt>23일</Orangetxt>까지 신청해주세요.
          </p>
        </h4>
      </SalaryCardBox>
    </>
  );
}

export default Dashboard;

export const Orangetxt = styled.span`
  color: var(--color-pri);
  font-weight: (--font-weight-semibold);
`;

export const SalaryCardBox = styled.div`
  color: var(--color-black);
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.8rem;
  border: 3px solid var(--color-pri);
  margin: 2rem auto;
  text-align: center;
  box-sizing: border-box;

  h2 {
    line-height: 5rem;
  }
  h4 {
    font-weight: var(--font-weight-semibold);
  }
`;
