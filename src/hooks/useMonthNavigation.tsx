import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export interface useMonthNavigationProps {
  date: string;
  id: number;
  salaryData: Array<{ id: number }>;
}

export function useMonthNavigation({ date, id, salaryData }: useMonthNavigationProps) {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs(date));
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const isNextMonth = () => {
    const today = dayjs();
    const isFutureMonth = currentMonth.isAfter(today, 'month');
    const isSameMonthBefore20th = currentMonth.isSame('today', 'month') && today.date() < 20;

    if (isFutureMonth || isSameMonthBefore20th) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const checkState = () => {
      const prevExists = salaryData.some((data) => data.id === id - 1);
      const nextExists = salaryData.some((data) => data.id === id + 1);

      setPrevDisabled(!prevExists);
      setNextDisabled(!nextExists || !isNextMonth());
    };
    checkState();
  }, [currentMonth, id, salaryData]);

  return { currentMonth, setCurrentMonth, prevDisabled, nextDisabled };
}
