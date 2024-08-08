import { useEffect, useState } from 'react';
import { getFormatDate } from '../utils/FormatDate';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchSchedules, addSchedule, ISchedule, ScheduleState } from '../slices/scheduleSlice';

interface useScheduleProps {
  selectedDate: Date;
}

export function useSchedule({ selectedDate }: useScheduleProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { schedules, status, error }: ScheduleState = useSelector(
    (state: RootState) => state.schedules
  );
  const [filteredSchedules, setFilteredSchedules] = useState<ISchedule[]>([]);
  const [showCompanySchedule, setShowCompanySchedule] = useState(true);
  const [showPersonalSchedule, setShowPersonalSchedule] = useState(true);

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchSchedules());
    }
  }, [status, dispatch]);

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
    void dispatch(addSchedule(newSchedule));
  };

  return {
    status,
    error,
    filteredSchedules,
    showCompanySchedule,
    showPersonalSchedule,
    setShowCompanySchedule,
    setShowPersonalSchedule,
    getScheduleListForSelectedDate,
    onAddSchedule,
  };
}
