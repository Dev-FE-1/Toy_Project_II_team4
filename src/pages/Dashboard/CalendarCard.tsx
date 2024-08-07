import Day from './Day';
import { CardBox } from '../../components/cardBox/CardBox.style';
import styled from 'styled-components';

export default function CalendarCard() {
  return (
    <CalendarCardWrapper>
      <Day day="today" />
      <Day day="tomorrow" />
    </CalendarCardWrapper>
  );
}

const CalendarCardWrapper = styled(CardBox)`
  display: flex;
  height: 19.5rem;
  overflow: hidden;
  position: relative;
`;
