import styled from 'styled-components';
import { CardBox } from '../../components/cardBox/CardBox.style';

export const ProfileCard = styled(CardBox)`
  height: 19.5rem;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProfileTop = styled.div`
  height: 6.4rem;
  background-color: var(--color-sec);
`;

export const ProfileContent = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const ProfileLeft = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 0 1rem 2rem;

  h3 {
    margin-bottom: 0.5rem;
    color: var(--font-pri);
    font-weight: bold;
  }

  h6 {
    margin: 0;
    font-weight: bold;
    color: var(--font-pri);
  }

  & .introduce {
    font-weight: normal;
    text-decoration: underline;
  }
`;

export const ProfileRight = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  height: 10rem;
  position: absolute;
  top: 1rem;
  left: 2rem;
  border-radius: 50%;
`;
