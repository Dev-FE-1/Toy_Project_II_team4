import { useNavigate } from 'react-router-dom';
import NoticeCard from '../salaryList/NoticeCard';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function SalaryCard() {
  const currentDate = new Date();
  const DueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 25);
  const originDate = dayjs(DueDate);
  const finalMonth = originDate.format('MM월 ');
  const finalDay = originDate.format('DD일');

  const navigate = useNavigate();

  const goToSalaryPage = () => navigate(`/salary-detail/3`);
  return (
    <SalaryCardWrapper
      date={finalMonth}
      day={finalDay}
      button={true}
      label={<h5>급여명세서 조회</h5>}
      onClick={goToSalaryPage}
    />
  );
}

export const SalaryCardWrapper = styled(NoticeCard)`
  display: flex;
  border: 1px solid var(--border-sec);
  height: 19.5rem;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 1rem 0;
  color: red;
`;
