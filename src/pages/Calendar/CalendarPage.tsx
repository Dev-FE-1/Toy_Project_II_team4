import React, { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import './Calendar.css';
import { useCalendar } from './hooks/useCalendar';
import { useSchedule } from './hooks/useSchedule';
import { CalendarHeader } from './CalendarHeader';
import { CalendarFilter } from './CalendarFilter';
import { CalendarDate } from './CalendarDate';
import { ScheduleList } from './ScheduleList';
import styled from 'styled-components';

export default function CalendarPage(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const calendarHook = useCalendar({
    setCurrentDate,
    selectedDate,
    setSelectedDate,
  });
  const scheduleHook = useSchedule({ selectedDate });

  return (
    <>
      <Heading title="업무관리" />
      <Calendar className="calendar">
        <CalendarHeader currentDate={currentDate} {...calendarHook.moveDate} />
        <CalendarFilter
          showCompanySchedule={scheduleHook.showCompanySchedule}
          showPersonalSchedule={scheduleHook.showPersonalSchedule}
          setShowCompanySchedule={scheduleHook.setShowCompanySchedule}
          setShowPersonalSchedule={scheduleHook.setShowPersonalSchedule}
          goToToday={calendarHook.moveDate.goToToday}
        />
        <CalendarDate
          currentDate={currentDate}
          selectedDate={selectedDate}
          onSelectDate={calendarHook.onDateSelected}
          schedules={scheduleHook.filteredSchedules}
        />
        <ScheduleList
          selectedDate={selectedDate}
          getScheduleListForSelectedDate={scheduleHook.getScheduleListForSelectedDate}
        />
      </Calendar>
    </>
  );
}

export const Calendar = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 1.8rem;
`;
