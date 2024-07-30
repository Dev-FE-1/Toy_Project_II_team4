import styled from 'styled-components';

export const DateButtonWrapper = styled.button`
  border: none;
  padding: 0.4rem 0.6rem;
  background-color: var(--color-sec);
  border-radius: 0.3rem;
  font-size: 1rem;
  color: var(--color-white);
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:focus {
    background-color: var(--color-tar);
  }
`;
