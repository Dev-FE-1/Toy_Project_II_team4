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
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & div {
      width: 100%;
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
      margin-bottom: 5px;
    }

    & p {
      font-size: 11px;
      color: var(--font-sec);
      margin-top: 5px;
    }
  }
`;
