import Day from './Day';
import { CardBox } from '../../components/cardBox/CardBox.style';
import styled from 'styled-components';

export interface ISchedule {
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
  border: 1px solid var(--border-sec);
  height: 19.5rem;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 1rem 0;
`;
