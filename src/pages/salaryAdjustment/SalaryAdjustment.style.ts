import { Accordion, Chip } from '@mui/material';
import TextInputField from '../../components/textInputField/TextInputField';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';

export const Wrapper = styled.div`
  font-size: 1.5rem;
`;

export const PageTitle = styled.h1`
  padding: 1rem;
  /* margin-bottom: 2rem; */
  border-bottom: 1px solid #ddd;
`;

export const BtnArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  .MuiButton-root {
    width: 10rem;
    font-size: 1.5rem;
  }
`;

export const SAccordion = muiStyled(Accordion)`
  .MuiAccordionSummary-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .MuiAccordionDetails-root ul {
    text-align: left;
  }
  .MuiAccordionDetails-root ul li {
    margin-bottom: 1rem;
  }
`;

export const AccordionTitle = styled.div`
  display: flex;
  .title-wrap {
    text-align: left;
  }
  p {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .date {
    color: var(--font-sec);
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

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const ModalTitle = styled.h2`
  padding: 3rem 0;
  text-align: center;
  font-weight: bold;
`;
