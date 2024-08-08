import * as Styled from './MoveMonth.style';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';
import { useMonthNavigation, useMonthNavigationProps } from '../../hooks/useMonthNavigation';

export default function MoveMonth({ date, id, salaryData }: useMonthNavigationProps) {
  const navigate = useNavigate();

  const { currentMonth, setCurrentMonth, prevDisabled, nextDisabled } = useMonthNavigation({
    date,
    id,
    salaryData,
  });
  const handlePrevMonth = () => {
    if (!prevDisabled) {
      setCurrentMonth(currentMonth.subtract(1, 'month'));
      navigate(`/salary-detail/${id - 1}`);
    }
  };

  const handleNextMonth = () => {
    if (!nextDisabled) {
      setCurrentMonth(currentMonth.add(1, 'month'));
      navigate(`/salary-detail/${id + 1}`);
    }
  };

  return (
    <Styled.Movemonth>
      <ChevronLeftIcon
        onClick={handlePrevMonth}
        style={{
          cursor: prevDisabled ? 'default' : 'pointer',
          visibility: prevDisabled ? 'hidden' : 'inherit',
        }}
      />
      <span className="up-date">
        {currentMonth.format('YYYY.MM')}
        <CalendarTodayIcon />
      </span>
      <ChevronRightIcon
        onClick={handleNextMonth}
        style={{
          cursor: nextDisabled ? 'default' : 'pointer',
          visibility: nextDisabled ? 'hidden' : 'inherit',
        }}
      />
    </Styled.Movemonth>
  );
}
