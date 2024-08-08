import { Accordion, Chip } from '@mui/material';
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';

export const modalWrapper = styled.div`
  width: 568px;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24px;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  font-size: var(--font-size-primary);
  .loading {
    height: calc(100vh - 210px);
  }
  .btnArea {
    display: flex;
    justify-content: flex-end;
    margin: 2rem 0;
  }
`;

export const SAccordion = muiStyled(Accordion)`
  &{
    box-shadow:none;
    background:transparent;
  }
  
  &::before{
    content: none;
  }
  &.Mui-expanded {
    margin-top:0
  }
  
  .MuiAccordionSummary-root {
    margin-bottom:1.5rem;
    background:var(--color-white);
    border-radius:.8rem;
    padding:2rem;
    border:1px solid var(--color-white);
  }
  .MuiAccordionSummary-root:hover {
    border: 1px solid var(--color-pri);
  }

  /* 터치 지원 장치에서 hover 효과를 비활성화 */
  @media (pointer: coarse) {
    .MuiAccordionSummary-root:hover {
      border: 1px solid var(--color-white); /* 터치 장치에서 기본 상태 */
    }
  }

  .MuiAccordionSummary-root.Mui-expanded {
    border:1px solid var(--color-pri);
  }
  
  .MuiAccordionSummary-content{
    justify-content:space-between;
    align-items:center;
    margin:0;
  }
  .MuiAccordionSummary-content.Mui-expanded {
    margin:0;
  }
  .MuiAccordionSummary-root .title {
    text-align: left;
  }
  .MuiAccordionSummary-root .title p {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }
  .MuiAccordionSummary-root .title .date {
    color: var(--font-sec);
  }
  .MuiAccordionDetails-root{
    border-radius:.8rem;
    padding:2rem;
    background:var(--color-white);
    border:1px solid var(--color-pri);
  }
  .MuiAccordionDetails-root ul {
    text-align: left;
  }
  .MuiAccordionDetails-root ul li {
    margin-bottom: 1.5rem;
  }
    .MuiAccordionDetails-root ul li span{
    font-weight:bold;
  }
  .MuiAccordionDetails-root .icons{
    display:flex;
    justify-content:flex-end
  }
  .MuiAccordionDetails-root .icons .MuiButtonBase-root{
    background: #3282f6;
    border-radius: 0.5rem;
    display: flex;
    color: #fff;
  }
`;

export const Schip = muiStyled(Chip)`
  & {
    margin-right:0.5rem;
    ${({ label }) => {
      switch (label) {
        case '반려':
          return 'background-color: #ffe8e8;color:#f63232';
        case '결재완료':
          return 'background-color:#e8ffe8;;color:#328f36';
        case '결재대기':
        default:
          return 'background-color: var(--color-sec);color:var(--color-pri);';
      }
    }};

    
  }
  .MuiChip-label {
    font-size: 1.2rem;
  }
`;
