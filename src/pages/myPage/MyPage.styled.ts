import styled from 'styled-components';
import profileBackgroundImg from '../../styles/images/profile_background.jpg';

export const MyPageContainer = styled.div`
  width: calc(100% + 1.6rem);
  margin: -0.8rem -0.8rem;

  .header-image {
    height: 300px;
    background-image: url(${profileBackgroundImg});
    background-size: cover;
    background-position: center;
  }

  .profile-container {
    text-align: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
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
    margin: -50px auto 20px;
  }

  h2 {
    margin: 0;
    color: #333;
  }

  & ul.list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    width: 100vw;
    font-size: var(--font-small);
    padding: 0 2.5rem;
  }

  .info-container {
    text-align: left;
    margin: 20px 0;
  }

  .button-container {
    margin: 20px 0;
  }

  & button.css-8fb7o1-JoyButton-root {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    width: 120px;
    height: 30px;
    font-size: var(--font-size-primary);
    border-radius: 5px;
    cursor: pointer;
  }

  & button.secondary-button {
    background-color: #f1f1f1;
    color: #333;
  }
`;
