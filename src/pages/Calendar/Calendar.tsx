import { useState } from 'react';
import Heading from '../../components/Heading';
import './Calendar.css';

interface ISchedule {
  dateId: number;
  category: string;
  description: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface IFormatDate {
  dateString: string;
  dayAndWeekday: string;
}

// 샘플 일정 데이터
const sampleSchedules: ISchedule[] = [
  {
    dateId: 1,
    category: '방송 출연',
    description: '뮤직뱅크 출연 - 카메라 리허설 13시 예정',
    title: '뮤직뱅크',
    startDate: '2024-08-10',
    startTime: '15:00',
    endDate: '2024-08-10',
    endTime: '17:00',
  },
  {
    dateId: 2,
    category: '방송 출연',
    description: '인기가요 출연 - 메이크업 아티스트 10시에 도착',
    title: '인기가요',
    startDate: '2024-08-20',
    startTime: '12:00',
    endDate: '2024-08-20',
    endTime: '14:00',
  },
  {
    dateId: 3,
    category: '방송 출연',
    description: '예능 프로그램 출연 - 런닝맨 팀과 호흡 맞춤',
    title: '런닝맨',
    startDate: '2024-08-05',
    startTime: '18:00',
    endDate: '2024-08-05',
    endTime: '20:00',
  },
  {
    dateId: 4,
    category: '방송 출연',
    description: '라디오 출연 - DJ 이영자와 대본 체크',
    title: '라디오 스타',
    startDate: '2024-09-15',
    startTime: '21:00',
    endDate: '2024-09-15',
    endTime: '22:00',
  },
  {
    dateId: 5,
    category: '촬영',
    description: '뮤직비디오 촬영 - 감독 김철수, 옷 변경 3회',
    title: '신곡 MV 촬영',
    startDate: '2024-08-15',
    startTime: '10:00',
    endDate: '2024-08-16',
    endTime: '20:00',
  },
  {
    dateId: 6,
    category: '촬영',
    description: '화보 촬영 - 촬영 후 인터뷰 예정',
    title: '패션 화보',
    startDate: '2024-08-10',
    startTime: '09:00',
    endDate: '2024-08-11',
    endTime: '17:00',
  },
  {
    dateId: 7,
    category: '촬영',
    description: 'CF 촬영 - 현장 매니저 30분 일찍 도착',
    title: '음료 광고 촬영',
    startDate: '2024-09-05',
    startTime: '13:00',
    endDate: '2024-09-06',
    endTime: '19:00',
  },
  {
    dateId: 8,
    category: '팬 이벤트',
    description: '팬사인회 - 사인 펜 준비 필요',
    title: '여름 팬사인회',
    startDate: '2024-08-25',
    startTime: '14:00',
    endDate: '2024-08-25',
    endTime: '16:00',
  },
  {
    dateId: 9,
    category: '팬 이벤트',
    description: '팬미팅 - 팬과의 질의응답 시간 포함',
    title: '팬미팅',
    startDate: '2024-08-20',
    startTime: '18:00',
    endDate: '2024-08-20',
    endTime: '21:00',
  },
  {
    dateId: 10,
    category: '팬 이벤트',
    description: '온라인 팬 이벤트 - 방송 시작 전 인터넷 연결 확인',
    title: '온라인 팬과의 만남',
    startDate: '2024-09-10',
    startTime: '20:00',
    endDate: '2024-09-10',
    endTime: '22:00',
  },
  {
    dateId: 11,
    category: '공연',
    description: '콘서트 - 메인 공연 2일차, 리허설 16시',
    title: '여름 콘서트',
    startDate: '2024-08-30',
    startTime: '19:00',
    endDate: '2024-09-01',
    endTime: '22:00',
  },
  {
    dateId: 12,
    category: '공연',
    description: '축제 공연 - 가을 축제, 무대 설치 완료 확인',
    title: '가을 축제 공연',
    startDate: '2024-08-25',
    startTime: '15:00',
    endDate: '2024-08-27',
    endTime: '17:00',
  },
  {
    dateId: 13,
    category: '공연',
    description: '기업 행사 공연 - 연습실 1시간 예약',
    title: '기업 행사 무대',
    startDate: '2024-09-22',
    startTime: '20:00',
    endDate: '2024-09-24',
    endTime: '22:00',
  },
  {
    dateId: 14,
    category: '방송 출연',
    description: '특별 방송 - 새로운 곡 선보임',
    title: '스페셜 방송',
    startDate: '2024-09-28',
    startTime: '14:00',
    endDate: '2024-09-28',
    endTime: '16:00',
  },
  {
    dateId: 15,
    category: '촬영',
    description: '새로운 CF 촬영 - 감독 미팅 11시',
    title: '새 CF 촬영',
    startDate: '2024-08-15',
    startTime: '09:00',
    endDate: '2024-08-16',
    endTime: '18:00',
  },
  {
    dateId: 16,
    category: '팬 이벤트',
    description: '특별 팬미팅 - 100명 선착순, 사은품 준비',
    title: '스페셜 팬미팅',
    startDate: '2024-09-05',
    startTime: '17:00',
    endDate: '2024-09-05',
    endTime: '20:00',
  },
  {
    dateId: 17,
    category: '공연',
    description: '연말 콘서트 - 추가 리허설 필요',
    title: '연말 콘서트',
    startDate: '2024-09-28',
    startTime: '18:00',
    endDate: '2024-09-30',
    endTime: '22:00',
  },
  {
    dateId: 18,
    category: '촬영',
    description: '패션 화보 촬영 - 의상 5벌 준비',
    title: '가을 패션 촬영',
    startDate: '2024-08-22',
    startTime: '10:00',
    endDate: '2024-08-23',
    endTime: '17:00',
  },
  {
    dateId: 19,
    category: '팬 이벤트',
    description: '비공개 팬사인회 - 초청 팬 50명',
    title: '비공개 팬사인회',
    startDate: '2024-09-18',
    startTime: '15:00',
    endDate: '2024-09-18',
    endTime: '17:00',
  },
  {
    dateId: 20,
    category: '방송 출연',
    description: '예능 방송 녹화 - 오후 2시 시작',
    title: '예능 프로그램',
    startDate: '2024-08-28',
    startTime: '14:00',
    endDate: '2024-08-28',
    endTime: '18:00',
  },
];

export default function Calendar(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [schedules] = useState<ISchedule[]>(sampleSchedules);
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);

  const weekdays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  // 이전 달 "<" 클릭
  const prevMonth = (): void => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  // 다음 달 ">" 클릭
  const nextMonth = (): void => {
    setCurrentDate((nextDate) => new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1));
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

    return schedules.filter(
      (schedule) =>
        schedule.startDate <= selectedDateString && selectedDateString <= schedule.endDate
    );
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
      const daySchedules = schedules.filter(
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
              <p>이 날짜에는 일정이 없습니다.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
