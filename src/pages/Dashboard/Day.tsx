import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchSchedules, ISchedule } from '../../slices/scheduleSlice';
import { useEffect } from 'react';
import { getFormatDate } from '../../utils/FormatDate';

export default function Day({ day }: { day: 'today' | 'tomorrow' }) {
  const dispatch = useDispatch<AppDispatch>();
  const schedules = useSelector<RootState, ISchedule[]>((state) => state.schedules.schedules);

  useEffect(() => {
    void dispatch(fetchSchedules());
  }, [dispatch]);

  const date = new Date();
  const targetDate = day === 'today' ? date : new Date(date.setDate(date.getDate() + 1));
  const formattedDate = getFormatDate(targetDate);

  // 해당 날짜의 스케줄 필터
  // (시작 날짜<현재 날짜<종료 날짜)
  // 총 4개의 일정까지 표시
  const daySchedules = schedules
    .filter(
      (schedule: ISchedule) =>
        schedule.startDate <= formattedDate.dateString &&
        formattedDate.dateString <= schedule.endDate
    )
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .slice(0, 4);

  return (
    <DayWrapper>
      <DayText>{getFormatDate(targetDate).dayAndWeekday}</DayText>
      <ScheduleWrapper>
        {daySchedules.map((schedule) => (
          <ScheduleBox
            key={schedule.dateId}
            className={`schedule-box ${schedule.category.replace(' ', '-')}`}
          >
            <ScheduleTime>{schedule.startTime}</ScheduleTime>
            <ScheduleTitle>{schedule.title}</ScheduleTitle>
          </ScheduleBox>
        ))}
      </ScheduleWrapper>
    </DayWrapper>
  );
}

const DayWrapper = styled.div`
  &:first-child {
    padding: 0 1rem 0 0;
  }
  &:last-child {
    padding: 0 0 0 1rem;
  }
  flex-grow: 1;

  &:first-child {
    border-right: 1px solid var(--border-sec);
  }
`;

const DayText = styled.div`
  font-size: var(--font-size-large);
  font-weight: bold;
  border-bottom: 2px solid var(--border-sec);
  padding-bottom: 1rem;
`;

const ScheduleWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ScheduleBox = styled.div`
  font-size: var(--font-size-primary);
  padding: 0.5rem;
  border-radius: 4px;

  &.방송-출연 {
    background-color: #3473e14d;
  }
  &.촬영 {
    background-color: #ffcb344d;
  }
  &.팬-이벤트 {
    background-color: #039c004d;
  }
  &.공연 {
    background-color: #dc5f004d;
  }
  &.개인 {
    background-color: #ddddddb3;
  }
`;

const ScheduleTime = styled.span`
  margin-right: 1rem;
  font-weight: bold;
`;

const ScheduleTitle = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
