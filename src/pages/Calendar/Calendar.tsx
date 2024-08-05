import Heading from '../../components/Heading';
import './Calendar.css';
import DateButton from './DateButton';
import ScheduleCheckbox from './ScheduleCheckbox';
import { useState } from 'react';
// import { AddScheduleModal } from './AddScheduleModal';
import { getDaysInMonth, getFirstDayOfMonth, getFormatDate } from '../../utils/FormatDate';
import { useCalendar } from './hooks/useCalendar';
import { useSchedule } from './hooks/useSchedule';
import { CalendarHeader } from './CalendarHeader';
import { ScheduleFilter } from './ScheduleFilter';
import { CalendarGrid } from './CalendarGrid';
import { ScheduleList } from './ScheduleList';

export default function Calendar(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const weekdays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  const {
    moveDate: { goToPrevMonth, goToNextMonth, goToToday },
    onDateSelected,
  } = useCalendar({
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
  });

  const {
    filteredSchedules,
    showCompanySchedule,
    showPersonalSchedule,
    setShowCompanySchedule,
    setShowPersonalSchedule,
    getScheduleListForSelectedDate,
  } = useSchedule({ selectedDate });

  // //일정 디테일을 보여주는 토글
  // const onToggleScheduleDetails = (dateId: number): void => {
  //   setSelectedScheduleId((prevId) => (prevId === dateId ? null : dateId));
  // };
  return (
    <>
      <Heading title="업무관리" />
      <div className="calendar">
        <CalendarHeader
          currentDate={currentDate}
          onPrevMonth={goToPrevMonth}
          onNextMonth={goToNextMonth}
        />
        <ScheduleFilter
          showCompanySchedule={showCompanySchedule}
          showPersonalSchedule={showPersonalSchedule}
          onToggleCompanySchedule={setShowCompanySchedule}
          onTogglePersonalSchedule={setShowPersonalSchedule}
        />
        <DateButton content="today" onClick={goToToday} />
        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          onSelectDate={onDateSelected}
          schedules={filteredSchedules}
        />
        <ScheduleList
          schedules={getScheduleListForSelectedDate()}
        />
        {/* <button className="add-schedule-button" onClick={openAddScheduleModal}>
            +
          </button>
          <AddScheduleModal
            isOpen={isAddScheduleModalOpen}
            onClose={closeAddScheduleModal}
            onAddSchedule={onAddSchedule}
          /> */}
      </div>
    </>
  );
}
