import { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import './Calendar.css';
import { AddScheduleModal } from './AddScheduleModal';
import DateButton from './DateButton';
import ScheduleCheckbox from './ScheduleCheckbox';

interface ISchedule {
  dateId: number;
  category: string; // 기존 category 유지
  scheduleType: 'company' | 'personal'; // 새로운 키 추가
  description: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface IScheduleData {
  schedule: ISchedule[];
}

interface IFormatDate {
  dateString: string;
  dayAndWeekday: string;
}

export default function Calendar(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);
  const [isAddScheduleModalOpen, setIsAddScheduleModalOpen] = useState<boolean>(false);
  const [showCompanySchedule, setShowCompanySchedule] = useState(true);
  const [showPersonalSchedule, setShowPersonalSchedule] = useState(true);

  const weekdays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/data/calendar.json');
        const data: { schedule: ISchedule[] } = (await response.json()) as IScheduleData;
        setSchedules(data.schedule);
      } catch (error) {
        console.error('Error loading schedules:', error);
      }
    };

    void fetchSchedules();
  }, []);

  // 이전 달 "<" 클릭
  const prevMonth = (): void => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      setSelectedDate(newDate);
      return newDate;
    });
  };

  // 다음 달 ">" 클릭
  const nextMonth = (): void => {
    setCurrentDate((nextDate) => {
      const newDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1);
      setSelectedDate(newDate);
      return newDate;
    });
  };
  //일정 디테일을 보여주는 토글
  const toggleScheduleDetails = (dateId: number): void => {
    setSelectedScheduleId((prevId) => (prevId === dateId ? null : dateId));
  };

  // Date객체의 형식에서 'YYYY-MM-DD' || 'D요일' 형식으로 변환
  const formatDate = (date: Date): IFormatDate => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekday = weekdays[date.getDay()];

    return {
      dateString: `${year}-${month}-${day}`,
      dayAndWeekday: `${day}일 ${weekday}요일`,
    };
  };

  //해당 달의 총 일수
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  //해당 달의 1일 요일
  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // selectedDate 상태 변경
  const onDateSelected = (day: number): void => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  // 선택한 날짜에 대한 스케줄 반환
  const getScheduleListForSelectedDate = (): ISchedule[] => {
    if (!selectedDate) return [];
    const selectedDateString = formatDate(selectedDate).dateString;

    return filteredSchedules.filter(
      (schedule) =>
        schedule.startDate <= selectedDateString && selectedDateString <= schedule.endDate
    )
  };

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
      const dateString = formatDate(date).dateString;

      // 현재 날짜의 스케줄 (시작 날짜<현재 날짜<종료 날짜)
      // const daySchedules = schedules.filter(
      //   (schedule) => schedule.startDate <= dateString && dateString <= schedule.endDate
      // );
      const daySchedules = filteredSchedules.filter(
        (schedule) => schedule.startDate <= dateString && dateString <= schedule.endDate
      );

      daysArray.push(
        <div
          key={`current-${i}`}
          className={`day current-month-day ${
            selectedDate && i === selectedDate.getDate() ? 'selected' : ''
          }`}
          onClick={() => onDateSelected(i)}
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

  const openAddScheduleModal = () => setIsAddScheduleModalOpen(true);
  const closeAddScheduleModal = () => setIsAddScheduleModalOpen(false);

  const onAddSchedule = (newSchedule: ISchedule) => {
    setSchedules((prevSchedules) => [...prevSchedules, newSchedule]);
  };

  const goToToday = (): void => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const filteredSchedules = schedules.filter(
    (schedule) =>
      (showCompanySchedule && schedule.scheduleType === 'company') ||
      (showPersonalSchedule && schedule.scheduleType === 'personal')
  );

  return (
    <>
      <Heading title="업무관리" />
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={prevMonth}>&lt;</button>
          <span>{`${currentDate.getFullYear()}년 ${String(currentDate.getMonth() + 1).padStart(
            2,
            '0'
          )}월`}</span>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="calendar-middle">
          <div className="calendar-checkbox">
            <ScheduleCheckbox
              label="회사"
              checked={showCompanySchedule}
              onChange={setShowCompanySchedule}
            />
            <ScheduleCheckbox
              label="개인"
              checked={showPersonalSchedule}
              onChange={setShowPersonalSchedule}
            />
          </div>
          <div className="calendar-buttons">
            <DateButton content="today" onClick={goToToday} />
          </div>
        </div>
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
          <button className="add-schedule-button" onClick={openAddScheduleModal}>
            +
          </button>
          <AddScheduleModal
            isOpen={isAddScheduleModalOpen}
            onClose={closeAddScheduleModal}
            onAddSchedule={onAddSchedule}
          />
        </div>
        <p className="selected-date-info">{formatDate(selectedDate).dayAndWeekday}</p>
        {selectedDate && (
          <div className="schedule-list">
            {getScheduleListForSelectedDate().length > 0 ? (
              <ul className="schedule-cards">
                {getScheduleListForSelectedDate().map((schedule) => (
                  <li
                    key={schedule.dateId}
                    className={`schedule-card ${schedule.category.replace(' ', '-')}`}
                    onClick={() => toggleScheduleDetails(schedule.dateId)}
                  >
                    <div className="schedule-card-header">
                      <span className="schedule-category">{schedule.category}</span>
                      <span className="schedule-title">{schedule.title}</span>
                      <span className="schedule-time">
                        {schedule.startTime} - {schedule.endTime}
                      </span>
                    </div>
                    {selectedScheduleId === schedule.dateId && (
                      <div className="schedule-details">
                        <p>{schedule.description}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>일정이 없습니다.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
