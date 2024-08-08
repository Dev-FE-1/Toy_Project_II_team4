import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/button/Button';
import * as Styled from './SalaryList.style';
import { useNavigate } from 'react-router-dom';
import NoticeCard from './NoticeCard';
import useSalaryDetails from './useSalaryDetails';
import Heading from '../../components/Heading/Heading';
import { useState } from 'react';
import Loading from '../../components/loading/Loading';

const years = [
  { value: '2022', text: '2022' },
  { value: '2023', text: '2023' },
  { value: '2024', text: '2024' },
];

export default function SalaryListPage() {
  const navigate = useNavigate();
  const userId = 'sajo1234567';
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const { data, error, isLoading } = useSalaryDetails();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const salaryList = data?.salaryDetails[userId] || [];

  //목록에 활용되는 데이터
  const filteredItem = salaryList.filter((item) => +item.payday.slice(0, 4) === +selectedYear);
  const sortedData = [...filteredItem].sort((a, b) => b.id - a.id);

  //카드에 활용되는 데이터
  const latestSalaryList = [...salaryList].sort(
    (a, b) => new Date(b.payday).getTime() - new Date(a.payday).getTime()
  );
  const latestData = latestSalaryList.length > 0 ? [latestSalaryList[0]] : [];

  function handleApplicationBtn(id: number) {
    if (salaryList.find((item) => item.id === id)) {
      navigate(`/salary-detail/${id}`, { state: { from: 'payments' } });
    } else {
      console.error('급여 명세서가 없습니다.');
    }
  }

  return (
    <Styled.Salary>
      <Heading title="급여정산" />
      <NoticeCard salaryList={latestData} />
      <Styled.YearSelect>
        <SelectBox
          labelId="SalaryYear"
          id="year"
          label="year"
          menuItems={years}
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          sx={{
            '& .MuiInputLabel-root': {
              fontSize: 'var(--font-size-primary)',
            },
            '& .MuiSelect-select': {
              fontSize: 'var(--font-size-small)',
            },
            '& .MuiSelect-icon': {
              fontSize: '2rem',
              right: '1rem',
              transform: 'translateY(-50%)',
              top: '40%',
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
              <Btn round="true" btntype="outlined" size="lg" label="신청가능" />
            ) : (
              <Btn round="true" disabled size="lg" label="지급완료" />
            )}
          </Styled.Btn>
        </Styled.ListCardBox>
      ))}
    </Styled.Salary>
  );
}
