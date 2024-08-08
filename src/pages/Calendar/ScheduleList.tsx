import { useState } from 'react';
import { getFormatDate } from '../../utils/FormatDate';
import styled from 'styled-components';
import { ScheduleDetailModal } from './SchduleDetailModal';

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

interface ScheduleListProps {
  selectedDate: Date;
  getScheduleListForSelectedDate: () => ISchedule[];
}

export function ScheduleList({
  selectedDate,
  getScheduleListForSelectedDate,
}: ScheduleListProps): JSX.Element {
  const [selectedSchedule, setSelectedSchedule] = useState<ISchedule | null>(null);

  const onOpenModal = (schedule: ISchedule): void => {
    setSelectedSchedule(schedule);
  };

  return (
    <>
      <SelectedDateInfo className="selected-date-info">
        {getFormatDate(selectedDate).dayAndWeekday}
      </SelectedDateInfo>
      {selectedDate && (
        <ScheduleListWrapper className="schedule-list">
          {getScheduleListForSelectedDate().length > 0 ? (
            <ul className="schedule-cards">
              {getScheduleListForSelectedDate().map((schedule) => (
                <ScheduleCard
                  key={schedule.dateId}
                  className={`schedule-card ${schedule.category.replace(' ', '-')}`}
                  onClick={() => onOpenModal(schedule)}
                >
                  <div className="schedule-card-content">
                    <span className="schedule-title">{schedule.title}</span>
                    <span className="schedule-time">
                      {schedule.startTime} - {schedule.endTime}
                    </span>
                  </div>
                </ScheduleCard>
              ))}
            </ul>
          ) : (
            <p>일정이 없습니다.</p>
          )}
        </ScheduleListWrapper>
      )}
      {selectedSchedule && (
        <ScheduleDetailModal
          schedule={selectedSchedule}
          onClose={() => setSelectedSchedule(null)}
        />
      )}
    </>
  );
}

export const SelectedDateInfo = styled.p`
  padding: 20px 0;
  border-top: 1px solid #ddd;
  font-size: var(--font-size-primary);
`;

export const ScheduleListWrapper = styled.div`
  .schedule-cards {
    list-style-type: none;
    padding: 0;
  }
`;

export const ScheduleCard = styled.li`
  background-color: var(--color-white);
  margin-bottom: 8px;
  height: 2.4rem;
  border: 1px solid var(--border-sec);
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.5s;

  &::before {
    content: '';
    margin-right: 1rem;
  }
  &:hover {
    transform: translateX(6px);
  }

  &.방송-출연 {
    border-left: 6px solid #3473e14d;
  }
  &.촬영 {
    border-left: 6px solid #ffcb344d;
  }
  &.팬-이벤트 {
    border-left: 6px solid #039c004d;
  }
  &.공연 {
    border-left: 6px solid #dc5f004d;
  }
  &.개인 {
    border-left: 6px solid #ddddddb2;
  }

  .schedule-card-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .schedule-title {
    font-weight: bold;
    font-size: var(--font-size-large);
  }

  .schedule-time {
    color: var(--font-tar);
    font-size: var(--font-size-primary);
  }
`;
