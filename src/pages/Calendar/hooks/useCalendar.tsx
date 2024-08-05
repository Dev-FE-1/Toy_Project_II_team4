import React from 'react';

interface useCalendarProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export function useCalendar({ setCurrentDate, selectedDate, setSelectedDate }: useCalendarProps) {
  const moveDate = {
    // 이전 달로 이동 ("<" 클릭)
    goToPrevMonth: (): void => {
      setCurrentDate((prevDate: Date) => {
        const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
        setSelectedDate(newDate);
        return newDate;
      });
    },
    // 다음 달로 이동 (">" 클릭)
    goToNextMonth: (): void => {
      setCurrentDate((nextDate: Date) => {
        const newDate = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 1);
        setSelectedDate(newDate);
        return newDate;
      });
    },
    // 오늘 날짜로 이동 (Today 버튼 클릭)
    goToToday: (): void => {
      const today = new Date();
      setCurrentDate(today);
      setSelectedDate(today);
    },
  };

  // selectedDate 상태 변경
  const onDateSelected = (day: number): void => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
  };
  return { moveDate, onDateSelected };
}
