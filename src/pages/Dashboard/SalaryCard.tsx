import { CardBox } from '../../components/cardBox/CardBox.style';
import NoticeCard from '../salaryList/NoticeCard';
import useSalaryDetails from '../salaryList/useSalaryDetails';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SalaryCard() {
  const userId = 'sajo1234567';
  const { data, isLoading } = useSalaryDetails();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingCard />;
  }

  const salary = data?.salaryDetails[userId] || [];
  const salaryList = [...salary].sort((a, b) => b.id - a.id);

  function handleApplicationBtn(id: number) {
    if (salaryList.find((item) => item.id === id)) {
      navigate(`/salary-detail/${id}`, { state: { from: 'home' } });
    } else {
      console.error('급여 명세서가 없습니다.');
    }
  }

  return (
    <NoticeCard
      salaryList={salaryList}
      button={true}
      label={<h5>급여명세서 조회</h5>}
      handleBtn={handleApplicationBtn}
    />
  );
}

const LoadingCard = styled(CardBox)`
  min-height: 160px;
`;
