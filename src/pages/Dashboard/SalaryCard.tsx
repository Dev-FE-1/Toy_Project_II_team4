import NoticeCard from '../salaryList/NoticeCard';
import styled from 'styled-components';

export default function SalaryCard() {
  const userId = 'sajo1234567'

  return (
    <SalaryCardWrapper>
    <NoticeCard
      userId={userId}
      button={true}
      label={<h5>급여명세서 조회</h5>}
    />
    </SalaryCardWrapper>
  );
}

export const SalaryCardWrapper = styled.div`
& > div{
  height: 19.5rem;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 1rem 0;
  color: red;
}
`;
