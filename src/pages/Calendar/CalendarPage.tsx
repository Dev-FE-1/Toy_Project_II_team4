import React, { useState } from 'react';
import './Calendar.css';
import styled from 'styled-components';
import { useCalendar } from '../../hooks/useCalendar';
import { useSchedule } from '../../hooks/useSchedule';
import Heading from '../../components/Heading/Heading';
import { CalendarHeader } from './CalendarHeader';
import { CalendarFilter } from './CalendarFilter';
import { CalendarDate } from './CalendarDate';
import { ScheduleList } from './ScheduleList';
import { AddScheduleModal } from './AddScheduleModal';
import { useDispatch } from 'react-redux';
import { addSchedule } from '../../slices/scheduleSlice';
interface ISchedule {
  dateId: number;
  category: string;
  scheduleType: 'company' | 'personal';
  description: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export default function CalendarPage(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState<boolean>(false);

  const dispatch = useDispatch();

  const openAddScheduleModal = () => setIsAddScheduleModalOpen(true);
  const closeAddScheduleModal = () => setIsAddScheduleModalOpen(false);
  const onAddSchedule = (newSchedule: ISchedule) => {
    dispatch(addSchedule(newSchedule));
  };
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
          openAddScheduleModal={openAddScheduleModal}
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
        <AddScheduleModal
          isOpen={isAddScheduleModalOpen}
          onClose={closeAddScheduleModal}
          onAddSchedule={onAddSchedule}
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
