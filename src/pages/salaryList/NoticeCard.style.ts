import styled from "styled-components";

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
  h3{
    font-weight:var(--font-weight-semibold);
    margin-bottom:15px;
  }
`;

export const Orangetxt = styled.span`
  color:var(--color-pri);
  font-weight:800;
`;