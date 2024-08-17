import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  position: fixed;
  max-width: 568px;
  margin: 0 auto;
  padding: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8rem;

  & ul.navbar-ul-items {
    display: flex;
    background-color: #ffff;
    flex-grow: 1, calc(100% / 5);
    padding-right: 0;
    padding-left: 0;

    & li.navbar-li-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      transition: all 0.3s ease;
      flex: 1;
      height: 80px;
      min-width: 0;

      & a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: inherit;
        text-decoration: none;
        width: 100%;
        height: 100%;
      }

      &:hover,
      & a.active {
        color: var(--color-pri);
      }

      & .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        & svg {
          width: 3rem;
          height: 3rem;
        }

        & .home-icon {
          width: 31px;
          height: 31px;
        }
      }

      & .text-box {
        font-size: var(--font-size-primary);
        font-weight: bold;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 100%;
        font-weight: var(--font-weight-semibold);
      }
    }
  }
`;
