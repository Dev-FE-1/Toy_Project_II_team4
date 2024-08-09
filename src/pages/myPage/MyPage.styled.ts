import styled, { css } from 'styled-components';

export const ButtonStyled = css`
  width: 10rem;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-pri);
  color: white;
  font-size: var(--font-size-primary);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
`;

export const ButtonStyledSecondary = css`
  background-color: var(--color-sec);
  color: var(--color-pri);
`;

export const MyPageContainer = styled.div`
  width: calc(102% + 2.6rem);
  margin: -1.8rem -1.8rem;

  .header-image {
    height: 250px;
    background-color: var(--color-pri-moreWhite);
    background-size: cover;
    background-position: center;
  }

  .profile-container {
    text-align: center;
    height: calc(100vh - 278px);

    background-color: white;
    border-radius: 10px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e0e0e0;
    margin: 0px auto;
    transform: translateY(-50px);
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 14%;
    margin-top: 30px;
    margin-bottom: 30px;

    & ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 17px;
      font-size: var(--font-size-primary);
      font-weight: var(--font-weight-medium);
      padding: 0 2.5rem;

      & li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
      }
      & div {
        margin-left: 22px;
      }
      & div.property {
        width: 70px;
      }

      & li div:last-child {
        width: 170px;
      }
    }
  }

  .button-container {
    width: 100%;
  }

  & button {
    ${ButtonStyled}
    background-color: #f3493a;
    margin: 10px 8px;
  }

  & .messageWrapper {
    width: 300px;
    position: absolute;
    left: -100%;
  }
  & .message {
    font-size: var(--font-size-small);
  }

  & button.secondary-button {
    background-color: var(--border-sec);
    color: var(--font-pri);
  }
`;
