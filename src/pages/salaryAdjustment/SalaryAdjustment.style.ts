import { Accordion, Chip } from '@mui/material';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';

export const Wrapper = styled.div`
  font-size: 1.5rem;
  .btnArea {
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0;
  }
  .btn-area .MuiButton-root {
    width: 10rem;
    font-size: 1.5rem;
  }
`;

export const SAccordion = muiStyled(Accordion)`
  .MuiAccordionSummary-root .title {
    display: flex;
  }
  .MuiAccordionSummary-content{
    display:flex;
    justify-content:space-between;
  }
  .MuiAccordionSummary-root .title .title-inner {
    text-align: left;
  }
  .MuiAccordionSummary-root .title .title-inner p {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .MuiAccordionSummary-root .title .title-inner .date {
    color: var(--font-sec);
  }
  .MuiAccordionDetails-root ul {
    text-align: left;
  }
  .MuiAccordionDetails-root ul li {
    margin-bottom: 1rem;
  }
    .MuiAccordionDetails-root ul li span{
    font-weight:bold;
  }
`;

export const Schip = muiStyled(Chip)`
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

export const modalWrapper = styled.div`
  .modal-title {
    padding: 3rem 0;
    text-align: center;
    font-weight: bold;
  }
  .modal-btnArea {
    display: flex;
    justify-content: center;
  }
`;
