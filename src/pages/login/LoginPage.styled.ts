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
    width: 180px;
    margin-top: 145px;
    margin-bottom: 45px;
  }

  & .form__descriptions {
    width: 354px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: var('--font-weight-bold');
    & h3 {
      font-weight: 700;
    }
  }

  & form {
    margin-top: 10px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.form__login_Email,
    div.form__login_Password {
      width: 100%;
      height: 86px;
    }

    & .login__button {
      width: 100%;
      height: 50px;
      font-size: 16px;
    }

    & label {
      font-size: 15px;
      margin-bottom: 5px;
      font-weight: 700;
      opacity: 0.8;
    }

    & p {
      font-size: 11px;
      color: var(--font-sec);
      margin-top: 5px;
    }
  }

  & input {
    font-size: 16px;
    height: 30px;
  }

  & .disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
    user-select: none;
  }
`;
