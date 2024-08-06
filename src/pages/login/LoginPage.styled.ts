import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 568px;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 230px;
    margin-top: 100px;
    margin-bottom: 45px;
  }

  & .form__descriptions {
    width: 354px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 900;

    & h3 {
      font-weight: 700;
    }
  }

  & form {
    margin-top: 5px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.form__login_Email,
    div.form__login_Password {
      width: 100%;
      height: 90px;
    }

    & button.css-8fb7o1-JoyButton-root {
      width: 100%;
      height: 50px;
      margin-top: 30px;
      font-size: 16px;
    }

    & label {
      font-size: 15px;
      font-weight: 500;
    }

    & p {
      font-size: 11px;
      color: var(--font-sec);
    }

    & input {
      font-size: 16px;
      height: 30px;
    }

    & button.disabled {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
      user-select: none;
    }

    & button {
      & .wrapper__loading_spinner {
        transform: translateX(5px);
      }
      & .form__loading_spinner {
        display: flex;
        justify-content: center;
      }
      & svg {
        color: var(--color-white);
        width: 30px;
      }
    }
  }
`;
