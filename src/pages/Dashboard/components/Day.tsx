import styled from 'styled-components';

export default function Day({ day }: { day: string }) {
  const date = new Date();
  const dateOfToday = date.getDate().toString();
  const dateOfTomorrow = (date.getDate() + 1).toString();

  const dayOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = date.getDay();
  const dayOfWeekName = dayOfWeekNames[dayOfWeek];

  return (
    <DayWrapper>
      <DayText>{dayOfWeekName}요일</DayText>
      <DateText>
        {day === 'today' ? dateOfToday : day === 'tomorrow' ? dateOfTomorrow : null}
      </DateText>
      {/* <Todo></Todo> */}
    </DayWrapper>
  );
}

const DayWrapper = styled.div`
  padding: 0 1rem;
  flex-grow: 1;

  &:first-child {
    border-right: 1px solid var(--border-sec);
  }
`;
const DayText = styled.div`
  flex-grow: 1;
  font-size: 2rem;
`;
const DateText = styled.div`
  flex-grow: 1;
  font-size: 3rem;
  font-weight: bold;
`;
