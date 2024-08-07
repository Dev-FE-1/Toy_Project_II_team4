import styled from 'styled-components';
import profileBackgroundImg from '../../styles/images/profile_background.jpg';

export const MyPageContainer = styled.div`
  width: calc(102% + 2.6rem);
  margin: -1.8rem -1.8rem;

  .header-image {
    height: 250px;
    background-image: url(${profileBackgroundImg});
    background-size: cover;
    background-position: center;
  }

  .profile-container {
    text-align: center;
    height: calc(100vh - 318px);
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    margin-top: -50px;

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
    margin: -50px auto 10px;
  }

  h2 {
    margin: 0;
  }

  .info-container {
    margin: 28px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 16px;
      width: 80vw;
      font-size: var(--font-size-primary);
      font-weight: var(--font-weight-medium);
      padding: 0 2.5rem;

      & li {
        padding: 0.1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
      }

      & li div {
        width: 150px;
        margin-left: 18px;
      }

      & li div:last-child {
        width: 215px;
        margin-left: 15px;
      }
    }
  }

  .button-container {
    margin: 40px 0;
  }

  & .message {
    font-size: var(--font-size-small);
  }

  & button.css-8fb7o1-JoyButton-root {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    width: 120px;
    height: 30px;
    font-size: var(--font-size-primary);
    font-weight: var(--font-weight-medium);
    border-radius: 5px;
    cursor: pointer;
  }

  & button.secondary-button {
    background-color: #f1f1f1;
    color: #333;
  }
`;
