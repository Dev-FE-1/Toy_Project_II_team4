import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  position: fixed;
  max-width: 568px;
  margin: 0 auto;
  padding: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8rem;
`;

export const MyToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffff;
  flex-grow: 1, calc(100% / 5);
  padding-right: 0;
  padding-left: 0;
  @media (min-width: 600px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;
