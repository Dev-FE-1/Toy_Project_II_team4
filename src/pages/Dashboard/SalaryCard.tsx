import { CardBox } from '../../components/cardBox/CardBox.style';
import NoticeCard from '../salaryList/NoticeCard';
import useSalaryDetails from '../salaryList/useSalaryDetails';
import styled from 'styled-components';

export default function SalaryCard() {
  const userId = 'sajo1234567';
  const { data, error, isLoading } = useSalaryDetails();

  if (isLoading) {
    return <LoadingCard />;

  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const salary = data?.salaryDetails[userId] || [];
  const sortedSalaryList = [...salary].sort((a, b) => b.id - a.id);

  return (
    <NoticeCard salaryList={sortedSalaryList} button={true} label={<h5>급여명세서 조회</h5>} />
  );
}

const LoadingCard = styled(CardBox)`
  min-height: 160px;
`;
