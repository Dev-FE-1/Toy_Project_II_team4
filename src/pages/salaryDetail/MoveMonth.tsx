import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import * as Styled from './MoveMonth.style';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from "react-router-dom";

type MoveMonthProps = {
  date:string;
  id:number
  salaryData:Array<{id:number}>
}

export default function MoveMonth({date, id, salaryData}:MoveMonthProps){
  const navigate=useNavigate()
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs(date))
  const [prevDisabled, setPrevDisabled] = useState(false)
  const [nextDisabled, setNextDisabled] = useState(false)

  const isNextMonth = () => {
    const today = dayjs()
    if(currentMonth.isAfter(today, 'month') || 
      (currentMonth.isSame('today', 'month') && today.date() < 20)){
        return false
      }
      return true
  }
  
  useEffect(() => {
    const checkState = () =>{
      const prevExists = salaryData.some((data) => data.id === id - 1)
      const nextExists = salaryData.some((data) => data.id === id + 1)
  
      setPrevDisabled(!prevExists)
      setNextDisabled(!nextExists || !isNextMonth())
    }
    checkState()
  }, [currentMonth, id, salaryData])

  const handlePrevMonth = () => {
    if(!prevDisabled){
    setCurrentMonth(currentMonth.subtract(1, 'month'));
    navigate(`/salary-detail/${id-1}`)
    }
  };
  
  const handleNextMonth = () => {
    if(!nextDisabled){
    setCurrentMonth(currentMonth.add(1, 'month'));
    navigate(`/salary-detail/${id+1}`)
    }
  };

  return(
    <Styled.Movemonth>
      <ChevronLeftIcon onClick={handlePrevMonth} style={{visibility: prevDisabled ? 'hidden' : 'inherit' }} />
        <span className="up-date">
          {currentMonth.format('YYYY.MM')}
          <CalendarTodayIcon />
        </span>
      <ChevronRightIcon onClick={handleNextMonth} style={{visibility: nextDisabled ? 'hidden' : 'inherit' }} />
    </Styled.Movemonth>
  )
}