import styled from "styled-components"

export const Container = styled.div`
  text-align:center;
  font-size:1.6rem;

  .bold {
    font-weight:var(--font-weight-bold);
  }
  & > div {
    background: linear-gradient(180deg, var(--color-pri), #9FA1AB);
    color: var(--color-white);
    padding-bottom:5rem;
  }
`;

export const ItemWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  font-weight:var(--font-weight-bold);

  .pay{
    padding-top:1rem;
    font-size:1.2rem;
  }
  .pay > h5,
  .pay > h3{
  font-weight:var(--font-weight-bold);
  }
`;