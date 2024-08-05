import React from 'react';
import ScheduleCheckbox from './ScheduleCheckbox';

interface ScheduleFilterProps {
  showCompanySchedule: boolean;
  showPersonalSchedule: boolean;
  onToggleCompanySchedule: (checked: boolean) => void;
  onTogglePersonalSchedule: (checked: boolean) => void;
}

export const ScheduleFilter: React.FC<ScheduleFilterProps> = ({
  showCompanySchedule,
  showPersonalSchedule,
  onToggleCompanySchedule,
  onTogglePersonalSchedule,
}) => (
  <div className="schedule-filters">
    <ScheduleCheckbox
      label="회사"
      checked={showCompanySchedule}
      onChange={onToggleCompanySchedule}
    />
    <ScheduleCheckbox
      label="개인"
      checked={showPersonalSchedule}
      onChange={onTogglePersonalSchedule}
    />
  </div>
);
