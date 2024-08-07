import { useEffect, useState } from 'react';
import { getFormatDate } from '../utils/FormatDate';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setSchedules, addSchedule } from '../slices/scheduleSlice';

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

interface useScheduleProps {
  selectedDate: Date;
}

export function useSchedule({ selectedDate }: useScheduleProps) {
  const dispatch = useDispatch();
  const schedules = useSelector((state: RootState) => state.schedules.schedules);
  const [filteredSchedules, setFilteredSchedules] = useState<ISchedule[]>([]);
  const [showCompanySchedule, setShowCompanySchedule] = useState(true);
  const [showPersonalSchedule, setShowPersonalSchedule] = useState(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch('/data/calendar.json');
        const data = (await response.json()) as { schedule: ISchedule[] };
        dispatch(setSchedules(data.schedule));
      } catch (error) {
        console.error('Error loading schedules:', error);
      }
    };

    void fetchSchedules();
  }, [dispatch]);

  useEffect(() => {
    const filtered = schedules.filter(
      (schedule) =>
        (showCompanySchedule && schedule.scheduleType === 'company') ||
        (showPersonalSchedule && schedule.scheduleType === 'personal')
    );
    setFilteredSchedules(filtered);
  }, [schedules, showCompanySchedule, showPersonalSchedule]);

  // 선택한 날짜에 대한 스케줄 리스트
  const getScheduleListForSelectedDate = (): ISchedule[] => {
    if (!selectedDate) return [];
    const selectedDateString = getFormatDate(selectedDate).dateString;

    return filteredSchedules.filter(
      (schedule) =>
        schedule.startDate <= selectedDateString && selectedDateString <= schedule.endDate
    );
  };

  // 일정 추가
  const onAddSchedule = (newSchedule: ISchedule) => {
    dispatch(addSchedule(newSchedule));
  };

  return {
    filteredSchedules,
    showCompanySchedule,
    showPersonalSchedule,
    setShowCompanySchedule,
    setShowPersonalSchedule,
    getScheduleListForSelectedDate,
    onAddSchedule,
  };
}
