import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .css-i4bv87-MuiSvgIcon-root {
    width: 3rem;
    height: 3.5rem;
  }
`;

export const Listline = styled.div`
  background-color: var(--border-pri);
  height: 0.05rem;
`;

export const Thinline = styled.div`
  background-color: var(--border-sec);
  height: 0.05rem;
`;

export const LSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ListWrapper = styled.div<{ type?: string; content?: string }>`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 1rem;
  box-sizing: border-box;

  div {
    font-size: ${(props) => (props.type === 'main' ? '1.4rem' : 'var(--font-size-small)')};
    font-weight: ${(props) => (props.type === 'main' ? 'bold' : 'normal')};
  }
  .price {
    color: ${(props) =>
      props.content === 'pension'
        ? '#039C00'
        : props.content === 'deduction'
          ? '#CC4846'
          : props.content === 'pay'
            ? 'var(--color-pri)'
            : 'var(--color-black)'};
  }
`;

export const Info = styled.div`
  margin-top: 2.3rem;
`;
