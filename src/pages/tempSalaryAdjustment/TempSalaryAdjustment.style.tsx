import { Accordion, Chip } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  font-size: 1.5rem;
`;

export const BtnArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  .MuiButton-root {
    width: 10rem;
    font-size: 1.5rem;
  }
`;

export const SAccordion = styled(Accordion)`
  .MuiAccordionSummary-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .MuiAccordionDetails-root ul {
    text-align: left;
  }
  .MuiAccordionDetails-root ul li {
    margin-bottom: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  .title-wrap {
    text-align: left;
  }
  p {
    margin-bottom: 5px;
  }
  .date {
    color: var(--font-sec);
  }
`;

export const Schip = styled(Chip)`
  & {
    margin-left: 1rem;
    margin-top: -3px;
    background-color: ${({ label }) => {
      switch (label) {
        case '반려':
          return 'red';
        case '결재완료':
          return 'var(--color-green)';
        case '결재대기':
        default:
          return 'var(--color-blue)';
      }
    }};
    color: var(--color-white);
  }
  .MuiChip-label {
    font-size: 1.2rem;
  }
`;
