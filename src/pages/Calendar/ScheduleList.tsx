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

  const onCloseModal = (): void => {
    setSelectedSchedule(null);
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
  font-size: 1.6rem;
`;

export const ScheduleListWrapper = styled.div`
  .schedule-cards {
    list-style-type: none;
    padding: 0;
  }
`;

export const ScheduleCard = styled.li`
  margin-bottom: 10px;
  border: 1px solid var(--border-sec);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 5px;
    height: 100%;
    margin-right: 10px;
    border-radius: 2px;
  }

  &.방송-출연 {
    border-left: 6px solid #3473e1;
  }
  &.촬영 {
    border-left: 6px solid #ffcb34;
  }
  &.팬-이벤트 {
    border-left: 6px solid #039c00;
  }
  &.공연 {
    border-left: 6px solid #dc5f00;
  }
  &.개인 {
    border-left: 6px solid #ddd;
  }

  .schedule-card-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .schedule-title {
    font-weight: bold;
  }

  .schedule-time {
    color: #666;
  }
`;
