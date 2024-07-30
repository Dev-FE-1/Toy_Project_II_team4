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

export const Orangetxt = styled.span`
  color:var(--color-pri);
  font-weight:(--font-weight-semibold);
`;

export const SalaryCardBox = styled.div`
  color:var(--color-black);
  padding: 2rem;
  margin: 1rem;
  border-radius:0.8rem;
  border: 3px solid var(--color-pri);
  margin: 2rem auto;
  text-align:center;
  box-sizing:border-box;

  h2{
    line-height:5rem;
  }
  h4{
    font-weight:var(--font-weight-semibold);
  }
`;

export const ListCardBox = styled.div<{state:string}>`
  color:var(--color-black);
  padding: 1.5rem;
  border-radius:0.5rem;
  margin: 1rem auto;
  display:flex;
  max-height:2.3rem;
  justify-content:space-between;
  border:${(props)=>props.state === 'true' ? 
    '1px solid var(--color-pri)' : 
    '1px solid var(--border-sec)'
  };
  //cursor:pointer;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > .title {
    font-weight: var(--font-weight-semibold);
    font-size: 1.2rem;
  }
  & > .date {
    font-size: 10px;
    color: var(--color-gray);
    text-align:left;
  }
`;

export const Btn = styled.div`
  margin:auto 0;
`;
