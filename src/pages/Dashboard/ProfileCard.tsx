import ProfileInfo from './ProfileInfo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import styled from 'styled-components';
import { CardBox } from '../../components/cardBox/CardBox.style';

export default function ProfileCard() {
  const infos = [
    {
      content: 'jihoon@sajo.com',
      icon: <EmailOutlinedIcon />,
    },
    {
      content: '010-1234-1234',
      icon: <PhoneOutlinedIcon />,
    },
    {
      content: '블루핑크',
      icon: <PeopleAltOutlinedIcon />,
    },
  ];

  return (
    <ProfileCardWrapper>
      <ProfileTop>
        <ProfileImage src="https://cdn.imweb.me/upload/S20201005f584d937f796b/fd54896845aa4.png" />
      </ProfileTop>
      <ProfileContent>
        <ProfileLeft>
          <ProfileLeftName>김지훈</ProfileLeftName>
          <ProfileLeftTeam>관리 2팀/로드 매니저</ProfileLeftTeam>
          <ProfileLeftIntroduce>언제든지 긍정적인 마인드로! 😆😆</ProfileLeftIntroduce>
        </ProfileLeft>
        <ProfileRight>
          {infos.map((info, index) => (
            <ProfileInfo key={index} content={info.content} Icon={info.icon} />
          ))}
        </ProfileRight>
      </ProfileContent>
    </ProfileCardWrapper>
  );
}

const ProfileCardWrapper = styled(CardBox)`
  height: 18rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0;
`;

const ProfileTop = styled.div`
  width: 100%;
  height: 6.4rem;
  background-color: var(--color-sec);
  position: absolute;
  top: 0;
  left: 0;
`;

const ProfileContent = styled.div`
  flex-grow: 1;
  display: flex;
`;

const ProfileLeft = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProfileRight = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProfileLeftName = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--font-pri);
  font-weight: bold;
`;

const ProfileLeftTeam = styled.h6`
  margin: 0;
  font-weight: bold;
  color: var(--font-pri);
`;

const ProfileLeftIntroduce = styled.h6`
  margin: 0;
  font-weight: bold;
  color: var(--font-pri);
  font-weight: normal;
  text-decoration: underline;
`;

const ProfileImage = styled.img`
  height: 10rem;
  position: absolute;
  top: 1rem;
  left: 2rem;
  border-radius: 50%;
`;
