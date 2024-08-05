import React from 'react';
import { getDaysInMonth, getFirstDayOfMonth, getFormatDate } from '../../utils/FormatDate';

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

interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date;
  onSelectDate: (day: number) => void;
  schedules: ISchedule[];
}

export function CalendarGrid({
  currentDate,
  selectedDate,
  onSelectDate,
  schedules,
}: CalendarGridProps): JSX.Element {
  const weekdays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  //캘린더 날짜 렌더링
  const renderDays = (): React.ReactElement[][] => {
    const dayInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const daysArray: React.ReactElement[] = [];

    // 이전 달의 날짜 표시
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`pre-${i}`} className="day prev-month-day"></div>);
    }

    // 현재 달의 날짜 표시
    for (let i = 1; i <= dayInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const dateString = getFormatDate(date).dateString;

      // 현재 날짜의 스케줄 (시작 날짜<현재 날짜<종료 날짜)
      const daySchedules = schedules.filter(
        (schedule) => schedule.startDate <= dateString && dateString <= schedule.endDate
      );

      daysArray.push(
        <div
          key={`current-${i}`}
          className={`day current-month-day ${
            selectedDate && i === selectedDate.getDate() ? 'selected' : ''
          }`}
          onClick={() => onSelectDate(i)}
        >
          {/* 날짜 */}
          <div className="date-number">{i}</div>
          {/* 스케줄 리스트 */}
          <div className="schedule-container">
            {daySchedules
              .sort((a, b) => a.startTime.localeCompare(b.startTime))
              .slice(0, 3)
              .map((schedule) => (
                <div
                  key={schedule.dateId}
                  className={`schedule-box ${schedule.category.replace(' ', '-')}`}
                >
                  {schedule.title}
                </div>
              ))}
          </div>
        </div>
      );
    }

    // 다음 달의 날짜 표시
    const totalDays = daysArray.length > 35 ? 42 : 35;
    const nextMonthDays = totalDays - daysArray.length;
    for (let i = 1; i < nextMonthDays + 1; i++) {
      daysArray.push(<div key={`next-${i}`} className="day next-month-day"></div>);
    }

    // 한주(7일)을 기준으로 날짜 분류
    const divideByWeek = daysArray.reduce<React.ReactElement[][]>((resultArray, item, index) => {
      const weekIndex = Math.floor(index / 7);
      if (!resultArray[weekIndex]) resultArray[weekIndex] = [];

      resultArray[weekIndex].push(item);
      return resultArray;
    }, [] as React.ReactElement[][]);

    return divideByWeek;
  };

  return (
    <div className="calendar-body">
      <div className="weekdays">
        {weekdays.map((weekday, index) => (
          <div key={index} className="weekday">
            {weekday}
          </div>
        ))}
      </div>

      <div className="days">
        {renderDays().map((week, index) => {
          return (
            <div key={`week-${index}`} className="days-row">
              {week.map((day) => day)}
            </div>
          );
        })}
      </div>
      {/*   <button className="add-schedule-button" onClick={openAddScheduleModal}>
                +
            </button>
            <AddScheduleModal
                isOpen={isAddScheduleModalOpen}
                onClose={closeAddScheduleModal}
                onAddSchedule={onAddSchedule}
            /> 
      */}
    </div>
  );
}
