interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarHeader({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps): JSX.Element {
  return (
    <div className="calendar-header">
      <button onClick={onPrevMonth}>&lt;</button>
      <span>{`${currentDate.getFullYear()}년 ${String(currentDate.getMonth() + 1).padStart(2, '0')}월`}</span>
      <button onClick={onNextMonth}>&gt;</button>
    </div>
  );
}
