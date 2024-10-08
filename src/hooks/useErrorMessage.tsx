import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { isDayScheduleEmpty } from '../pages/Dashboard/Day';

export const useErrorMessage = ({
  day,
}: {
  day: 'today' | 'tomorrow';
}): {
  message: string | null;
} => {
  const { schedules, status } = useSelector((state: RootState) => state.schedules);
  const isEmpty = isDayScheduleEmpty({ schedules, day });

  const message = useMemo(() => {
    if (isEmpty) return '오늘 일정이 없습니다';
    if (status === 'loading') return '일정 불러오는 중...';
    if (status === 'failed') return '일정 불러오기 실패';
    return null;
  }, [isEmpty, status]);
  return { message };
};
