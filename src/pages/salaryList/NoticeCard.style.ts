import styled from "styled-components";

export const SalaryCardBox = styled.div`
  color:var(--color-black);
  background-color:var(--color-white);
  padding: 1.2rem 4rem 2rem 4rem;
  margin: 1rem;
  border-radius:2rem;
  border: 1px solid var(--border-sec);
  margin: 2rem auto;
  box-sizing:border-box;

  .imoge{
    font-size:60px;
    text-align:end;
  }

  h2{
    line-height:4rem;
    font-weight:var(--font-weight-semi);
  }
  h3{
    font-weight:var(--font-weight-semi);
    margin-bottom:15px;
  }
`;

export const Orangetxt = styled.span`
  color:var(--color-pri);
  font-weight:800;
`;