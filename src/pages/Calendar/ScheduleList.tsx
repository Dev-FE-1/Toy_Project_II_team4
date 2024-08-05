import { useState } from 'react';

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
  schedules: ISchedule[];
}

export function ScheduleList({ schedules }: ScheduleListProps): JSX.Element {
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);

  // 클릭한 스케줄 디테일을 보여주는 토글
  const onToggleScheduleDetails = (dateId: number): void => {
    setSelectedScheduleId((prevId) => (prevId === dateId ? null : dateId));
  };

  return (
    <div className="schedule-list">
      {schedules.map((schedule) => (
        <div
          key={schedule.dateId}
          className={`schedule-item ${schedule.category.replace(' ', '-')}`}
          onClick={() => onToggleScheduleDetails(schedule.dateId)}
        >
          <span>{schedule.title}</span>
          {selectedScheduleId === schedule.dateId && (
            <div className="schedule-details">{schedule.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
