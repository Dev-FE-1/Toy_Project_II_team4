import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import * as Styled from './MoveMonth.style';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from "react-router-dom";

type MoveMonthProps = {
  date:string;
  id:number
}

export default function MoveMonth({date, id}:MoveMonthProps){
  const navigate=useNavigate()
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs(date));
  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
    navigate(`/salary-detail/${id-1}`)
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
    navigate(`/salary-detail/${id+1}`)
  };

  return(
    <Styled.Movemonth>
      <ChevronLeftIcon onClick={handlePrevMonth} style={{ cursor: 'pointer' }} />
        <span className="up-date">
          {currentMonth.format('YYYY.MM')}
          <CalendarTodayIcon />
        </span>
      <ChevronRightIcon onClick={handleNextMonth} style={{ cursor: 'pointer' }} />
    </Styled.Movemonth>
  )
}