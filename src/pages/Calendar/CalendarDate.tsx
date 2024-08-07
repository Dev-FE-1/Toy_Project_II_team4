import React from 'react';
import { getDaysInMonth, getFirstDayOfMonth, getFormatDate } from '../../utils/FormatDate';
import styled from 'styled-components';

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

interface CalendarDateProps {
  currentDate: Date;
  selectedDate: Date;
  onSelectDate: (day: number) => void;
  schedules: ISchedule[];
}

export function CalendarDate({
  currentDate,
  selectedDate,
  onSelectDate,
  schedules,
}: CalendarDateProps): JSX.Element {
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
      const daySchedules = schedules
        .filter((schedule) => schedule.startDate <= dateString && dateString <= schedule.endDate)
        .sort((a, b) => a.startTime.localeCompare(b.startTime))
        .slice(0, 3)
        .map((schedule) => (
          <ScheduleBox
            key={schedule.dateId}
            className={`schedule-box ${schedule.category.replace(' ', '-')}`}
          >
            {schedule.title}
          </ScheduleBox>
        ));

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
          <div className="schedule-container">{daySchedules}</div>
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
    <CalendarDateWrapper className="calendar-body">
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
    </CalendarDateWrapper>
  );
}

export const CalendarDateWrapper = styled.div`
  .weekdays {
    display: flex;
  }

  .days-row {
    display: flex;
  }

  .weekday {
    color: #ccc;
    width: calc(100% / 7);
    padding: 8px 4px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
  .day {
    width: calc(100% / 7);
    padding: 4px;
    box-sizing: border-box;
    height: 10rem;
  }
  .date-number {
    height: 3rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 1.8rem;
    text-align: center;
  }

  .current-month-day {
    cursor: pointer;
    &:hover {
      background-color: var(--page-gray);
    }
  }

  .day.selected .date-number {
    background-color: var(--color-pri);
    border-radius: 50%;
    color: white;
    font-weight: bold;
  }

  .schedule-container {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .schedule-box {
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 2px;
  }

  .schedule-card.방송-출연 {
    background-color: #3473e1;
  }
  .schedule-card.촬영 {
    background-color: #ffcb34;
  }
  .schedule-card.팬-이벤트 {
    background-color: #039c00;
  }
  .schedule-card.공연 {
    background-color: #dc5f00;
  }
  .schedule-card.개인 {
    background-color: #ddd;
  }
`;

export const ScheduleBox = styled.div`
  .schedule-box.방송-출연 {
    background-color: rgba(52, 115, 225, 0.3); /* 기존 색상에 투명도 추가 */
  }
  .schedule-box.촬영 {
    background-color: rgba(255, 203, 52, 0.3); /* 기존 색상에 투명도 추가 */
  }
  .schedule-box.팬-이벤트 {
    background-color: rgba(3, 156, 0, 0.3); /* 기존 색상에 투명도 추가 */
  }
  .schedule-box.공연 {
    background-color: rgba(220, 95, 0, 0.3); /* 기존 색상에 투명도 추가 */
  }
  .schedule-box.개인 {
    background-color: #ddd;
  }
`;

export const AddScheduleButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4285f4;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;
