import { useState } from 'react';
import { getFormatDate } from '../../utils/FormatDate';
import styled from 'styled-components';

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
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);

  // 클릭한 스케줄 디테일을 보여주는 토글
  const onToggleScheduleDetails = (dateId: number): void => {
    setSelectedScheduleId((prevId) => (prevId === dateId ? null : dateId));
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
                  onClick={() => onToggleScheduleDetails(schedule.dateId)}
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
                </ScheduleCard>
              ))}
            </ul>
          ) : (
            <p>일정이 없습니다.</p>
          )}
        </ScheduleListWrapper>
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

  .schedule-card {
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .schedule-card-header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .schedule-category {
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 3px;
    color: white;
  }

  .schedule-title {
    flex-grow: 1;
    margin: 0 10px;
  }

  .schedule-time {
    font-size: 0.9em;
    color: #666;
  }

  .schedule-details {
    padding: 10px;
    background-color: #f9f9f9;
    border-top: 1px solid #eee;
  }

  .schedule-card.방송-출연 {
    background-color: #3473e1;
  }
  .schedule-card.촬영 {
    background-color: #ffcb34;
  }
  .schedule-card.팬-이벤트 {
    background-color: #039c00;
  }
  .schedule-card.공연 {
    background-color: #dc5f00;
  }
  .schedule-card.개인 {
    background-color: #ddd;
  }
`;

export const ScheduleCard = styled.li`

`;
