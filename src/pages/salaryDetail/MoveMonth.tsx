import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import * as Styled from './MoveMonth.style';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function MoveMonth(){
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs('2024-07-25'));
  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
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