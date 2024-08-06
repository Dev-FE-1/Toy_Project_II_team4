import styled from "styled-components";

export const YearSelect = styled.div`
  width:5%;
  min-width:20%;

  & > div > div > div {
    height: 40px;
    min-height: 1.4375em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline:none;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const Salary = styled.div`
  & > h2 {
  text-align:left;
  }
`;

export const Grayline = styled.div`
  background-color:var(--border-sec);
  height:0.08px;
`;

export const ListCardBox = styled.div<{$state:boolean}>`
  background-color:var(--color-white);
  color:var(--color-black);
  padding: 1.5rem 2rem 2rem 2rem;
  border-radius:1rem;
  margin: 1.5rem auto;
  display:flex;
  height:2.5rem;
  justify-content:space-between;
  border:${({$state})=> $state === true ? 
    '1px solid var(--color-pri)' : 
    '1px solid var(--border-sec)'
  };
  cursor:pointer;
  & > div> .MuiButton-root {
    pointer-events: none;
    &:hover {
      pointer-events: none;
    }
  }
`;

export const List = styled.div<{$state:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > .title {
    font-weight: ${({$state}) => $state === true? 'var(--font-weight-bold)' : 'var(font-weight-semibold)'};
    line-height: 3.2rem;
    font-size: 1.5rem;
  }
  & > .date {
    font-size: 13px;
    color: ${({$state}) => $state === true? 'var(--font-pri)' : 'var(--font-sec)'};
    text-align:left;
  }
`;

export const Btn = styled.div`
  margin:auto 0;
`;
