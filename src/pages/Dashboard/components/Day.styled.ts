import styled from 'styled-components';

export const DayWrapper = styled.div`
  padding: 0 1rem;
  flex-grow: 1;

  &:first-child {
    border-right: 1px solid var(--border-sec);
  }
`;
export const DayText = styled.div`
  flex-grow: 1;
  font-size: 2rem;
`;
export const DateText = styled.div`
  flex-grow: 1;
  font-size: 3rem;
  font-weight: bold;
`;
