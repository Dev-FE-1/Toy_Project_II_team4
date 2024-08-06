import ScheduleCheckbox from './ScheduleCheckbox';
import DateButton from './DateButton';
import styled from 'styled-components';

interface CalendarFilterProps {
  showCompanySchedule: boolean;
  showPersonalSchedule: boolean;
  setShowCompanySchedule: (show: boolean) => void;
  setShowPersonalSchedule: (show: boolean) => void;
  goToToday: () => void;
}

export function CalendarFilter({
  showCompanySchedule,
  showPersonalSchedule,
  setShowCompanySchedule,
  setShowPersonalSchedule,
  goToToday,
}: CalendarFilterProps): JSX.Element {
  return (
    <CalendarFilterWrapper className="calendar-filter">
      <div className="calendar-checkbox">
        <ScheduleCheckbox
          label="회사"
          checked={showCompanySchedule}
          onChange={setShowCompanySchedule}
        />
        <ScheduleCheckbox
          label="개인"
          checked={showPersonalSchedule}
          onChange={setShowPersonalSchedule}
        />
      </div>
      <div className="calendar-buttons">
        <DateButton content="today" onClick={goToToday} />
      </div>
    </CalendarFilterWrapper>
  );
}

export const CalendarFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .calendar-checkbox {
    display: flex;
    font-size: 16px;
  }
  .calendar-checkbox label {
    margin-right: 15px;
    display: flex;
    align-items: center;
  }

  .calendar-checkbox input[type='checkbox'] {
    margin-right: 5px;
  }
`;
