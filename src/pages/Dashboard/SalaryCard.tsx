import NoticeCard from '../salaryList/NoticeCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchSalaryDetails } from '../../slices/salaryDtSlice';
import { useEffect } from 'react';

export default function SalaryCard() {
  const userId = 'sajo1234567';
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { salaryDetails, status } = useSelector((state: RootState) => state.salaryDt);

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchSalaryDetails());
    }
  }, [dispatch, status]);

  const salary = salaryDetails[userId] || [];
  const salaryList = [...salary].sort((a, b) => b.id - a.id);

  function handleApplicationBtn(id: number) {
    if (salaryList.find((item) => item.id === id)) {
      navigate(`/payments/${id}`, { state: { from: 'home' } });
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
