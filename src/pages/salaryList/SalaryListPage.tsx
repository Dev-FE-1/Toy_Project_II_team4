import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/button/Button';
import * as Styled from './SalaryList.style';
import { useNavigate } from 'react-router-dom';
import NoticeCard from './NoticeCard';
import Heading from '../../components/Heading/Heading';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalaryDetails, SalaryDataItem } from '../../slices/salaryDtSlice';
import { RootState, AppDispatch } from '../../store/store';

const years = [
  { value: '2022', text: '2022' },
  { value: '2023', text: '2023' },
  { value: '2024', text: '2024' },
];

export default function SalaryListPage() {
  const navigate = useNavigate();
  const userId = 'sajo1234567';
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [sortedData, setSortedData] = useState<SalaryDataItem[]>([]);
  const [filteredData, setFilteredData] = useState<SalaryDataItem[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const { salaryDetails, status, error } = useSelector((state: RootState) => state.salaryDt);

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchSalaryDetails());
    }
  }, [dispatch, status]);

  //목록에 활용되는 데이터
  const salaryList = salaryDetails[userId] || [];
  useEffect(() => {
    const filteredItem = salaryList.filter((item) => +item.payday.slice(0, 4) === +selectedYear);
    const sorted = [...filteredItem].sort((a, b) => b.id - a.id);
    setFilteredData(filteredItem);
    setSortedData(sorted);
  }, [salaryDetails, selectedYear, userId]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <div>Error:{error}</div>;
  }

  function handleApplicationBtn(id: number) {
    if (salaryList.find((item) => item.id === id)) {
      navigate(`/payments/${id}`, { state: { from: 'payments' } });
    } else {
      console.error('급여 명세서가 없습니다.');
    }
  }

  return (
    <Styled.Salary>
      <Heading title="급여정산" />
      <NoticeCard salaryList={sortedData} />
      <Styled.YearSelect>
        <SelectBox
          labelId="SalaryYear"
          id="SalaryYear"
          label=" "
          menuItems={years}
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          sx={{
            '& .MuiInputLabel-root': {
              fontSize: 'var(--font-size-primary)',
            },
            '& .MuiSelect-select': {
              fontSize: '1.025',
            },
            '& .MuiSelect-icon': {
              fontSize: '2rem',
              right: '0.3rem',
              transform: 'translateY(-50%)',
              top: '42%',
            },
          }}
        />
      </Styled.YearSelect>
      {sortedData.map((el) => (
        <Styled.ListCardBox
          key={el.id}
          $state={el.state}
          onClick={() => {
            handleApplicationBtn(el.id);
          }}
        >
          <Styled.List $state={el.state}>
            <span className="title">{el.title}</span>
            <span className="date">{el.state === true ? '지급예정' : el.payday}</span>
          </Styled.List>
          <Styled.Btn>
            {el.state === true ? (
              <Btn round={true} btntype="outlined" size="lg" label="신청가능" />
            ) : (
              <Btn round={true} disabled size="lg" label="지급완료" />
            )}
          </Styled.Btn>
        </Styled.ListCardBox>
      ))}
    </Styled.Salary>
  );
}
