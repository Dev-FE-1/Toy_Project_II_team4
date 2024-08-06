import styled from 'styled-components';

interface CalendarHeaderProps {
  currentDate: Date;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
}

export function CalendarHeader({
  currentDate,
  goToPrevMonth,
  goToNextMonth,
}: CalendarHeaderProps): JSX.Element {
  return (
    <CalendarHeaderWrapper className="calendar-header">
      <button onClick={goToPrevMonth}>&lt;</button>
      <span>{`${currentDate.getFullYear()}년 ${String(currentDate.getMonth() + 1).padStart(2, '0')}월`}</span>
      <button onClick={goToNextMonth}>&gt;</button>
    </CalendarHeaderWrapper>
  );
}

export const CalendarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: 2.2rem;
  font-weight: bold;
`;
