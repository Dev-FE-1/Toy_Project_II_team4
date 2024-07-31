import ProfileInfo from './ProfileInfo';
import * as Styled from './ProfileCard.styled';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

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
    <Styled.ProfileCard>
      <Styled.ProfileTop>
        <Styled.ProfileImage src="https://cdn.imweb.me/upload/S20201005f584d937f796b/fd54896845aa4.png" />
      </Styled.ProfileTop>
      <Styled.ProfileContent>
        <Styled.ProfileLeft>
          <Styled.ProfileLeftName>김지훈</Styled.ProfileLeftName>
          <Styled.ProfileLeftTeam>관리 2팀/로드 매니저</Styled.ProfileLeftTeam>
          <Styled.ProfileLeftIntroduce>
            언제든지 긍정적인 마인드로! 😆😆
          </Styled.ProfileLeftIntroduce>
        </Styled.ProfileLeft>
        <Styled.ProfileRight>
          {infos.map((info, index) => (
            <ProfileInfo key={index} content={info.content} Icon={info.icon} />
          ))}
        </Styled.ProfileRight>
      </Styled.ProfileContent>
    </Styled.ProfileCard>
  );
}
