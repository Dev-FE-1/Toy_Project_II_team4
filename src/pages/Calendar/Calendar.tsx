import { useState } from 'react';
import Heading from '../../components/Heading';
import './Calendar.css';

// 샘플 일정 데이터
const sampleSchedules = [
  {
    dateId: 1,
    category: '워크샵',
    description: '프로젝트 미팅',
    title: '팀 회의',
    startDate: '2024-08-02',
    startTime: '08:00',
    endDate: '2024-08-04',
    endTime: '09:00',
  },
  {
    dateId: 6,
    category: '방송 출연',
    description: '비고',
    title: '외부 일정',
    startDate: '2024-08-03',
    startTime: '09:00',
    endDate: '2024-08-03',
    endTime: '18:00',
  },
  {
    dateId: 2,
    category: '회의',
    description: '프로젝트 미팅',
    title: '팀 회의',
    startDate: '2024-08-05',
    startTime: '14:00',
    endDate: '2024-08-07',
    endTime: '16:00',
  },
  {
    dateId: 3,
    category: '워크샵',
    description: '팀 빌딩',
    title: '연간 워크샵',
    startDate: '2024-08-10',
    startTime: '09:00',
    endDate: '2024-08-12',
    endTime: '17:00',
  },
  {
    dateId: 4,
    category: '회의',
    description: '프로젝트 미팅',
    title: '팀 회의',
    startDate: '2024-08-03',
    startTime: '15:00',
    endDate: '2024-08-03',
    endTime: '16:00',
  },
  {
    dateId: 5,
    category: '방송 출연',
    description: '프로젝트 미팅',
    title: '팀 회의',
    startDate: '2024-08-01',
    startTime: '13:00',
    endDate: '2024-08-12',
    endTime: '16:00',
  },
];

export default function Calendar(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const prevMonth = (): void => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const nextMonth = (): void => {
    setCurrentDate((nextDate) => new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1));
  };

  const weekdays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  //해당 달의 총 일수
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  //해당 달의 1일 요일
  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  //캘린더 날짜 렌더링
  const renderDays = (): JSX.Element[][] => {
    const dayInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const daysArray: JSX.Element[] = [];

    // // 이전 달의 날짜 표시
    // for (let i = 0; i < firstDayOfMonth; i++) {
    //   const prevMonthDate = new Date(
    //     currentDate.getFullYear(),
    //     currentDate.getMonth(),
    //     0 - i
    //   ).getDate();
    //   daysArray.unshift(
    //     <div key={`pre-${i}`} className="day prev-month-day">
    //       {prevMonthDate}
    //     </div>
    //   );
    // }
    // 이전 달의 날짜 표시
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`pre-${i}`} className="day prev-month-day"></div>);
    }

    // 현재 달의 날짜 표시
    for (let i = 1; i <= dayInMonth; i++) {
      daysArray.push(
        <div key={`current-${i}`} className="day current-month-day">
          {i}
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

  const weeks = renderDays();

  return (
    <>
      <Heading title="업무관리" />
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={prevMonth}>&lt;</button>
          <span>{`${currentDate.getFullYear()}년 ${String(currentDate.getMonth() + 1).padStart(2, '0')}월`}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>

        <div className="calendar-body">
          <div className="weekdays">
            {weekdays.map((weekday: string, index: number) => (
              <div key={index} className="weekday">
                {weekday}
              </div>
            ))}
          </div>

          <div className="days">
            {weeks.map((week: React.ReactElement[], index: number) => {
              return (
                <div key={`week-${index}`} className="days-row">
                  {week.map((day) => day)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
