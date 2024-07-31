import Day from './Day';
import * as Styled from './CalendarCard.styled';

export default function CalendarCard() {
  return (
    <Styled.CalendarCardWrapper>
      <Day day="today" />
      <Day day="tomorrow" />
    </Styled.CalendarCardWrapper>
  );
}
