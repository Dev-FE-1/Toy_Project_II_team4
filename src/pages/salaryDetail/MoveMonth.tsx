import * as Styled from './MoveMonth.style';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMonthNavigation, useMonthNavigationProps } from '../../hooks/useMonthNavigation';

export default function MoveMonth({ date, id, salaryData }: useMonthNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();

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

  const fromHome = (location.state as { from?: string })?.from === 'home';
  return (
    <Styled.Movemonth>
      {!fromHome && (
        <ChevronLeftIcon
          onClick={handlePrevMonth}
          style={{
            cursor: prevDisabled ? 'default' : 'pointer',
            visibility: prevDisabled ? 'hidden' : 'inherit',
          }}
        />
      )}
      <span className="up-date">
        {currentMonth.subtract(1, 'month').format('YYYY.MM')}
        <CalendarTodayIcon />
      </span>
      {!fromHome && (
        <ChevronRightIcon
          onClick={handleNextMonth}
          style={{
            cursor: nextDisabled ? 'default' : 'pointer',
            visibility: nextDisabled ? 'hidden' : 'inherit',
          }}
        />
      )}
    </Styled.Movemonth>
  );
}
