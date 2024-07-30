import * as Styled from './Day.styled';

export default function Day({ day }: { day: string }) {
  const date = new Date();
  const dateOfToday = date.getDate().toString();
  const dateOfTomorrow = (date.getDate() + 1).toString();

  const dayOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = date.getDay();
  const dayOfWeekName = dayOfWeekNames[dayOfWeek];

  return (
    <Styled.DayWrapper>
      <Styled.DayText>{dayOfWeekName}요일</Styled.DayText>
      <Styled.DateText>
        {day === 'today' ? dateOfToday : day === 'tomorrow' ? dateOfTomorrow : null}
      </Styled.DateText>
      {/* <Todo></Todo> */}
    </Styled.DayWrapper>
  );
}
