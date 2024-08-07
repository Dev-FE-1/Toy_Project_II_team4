import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-size: 1.6rem;

  .bold {
    font-weight: var(--font-weight-bold);
  }
  & > div {
    background: var(--color-pri-white);
    color: var(--color-white);
    padding-bottom: 5rem;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: var(--font-weight-bold);

  .pay {
    box-sizing: border-box;
    padding: 1rem 0rem;
    font-size: var(--font-size-small);
  }
  .pay > h5,
  .pay > h3 {
    font-weight: var(--font-weight-bold);
  }

  .info {
    padding-top: 1.3rem;
    font-size: var(--font-size-small);
  }
`;

export const LgFont = styled.span`
  font-size: var(--font-size-xlarge);
`;
