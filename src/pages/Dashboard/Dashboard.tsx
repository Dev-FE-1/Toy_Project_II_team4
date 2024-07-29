import Heading from '../../components/Heading/Heading';
import ProfileInfo from './ProfileInfo';
import * as Styled from './Dashboard.styled';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

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

function Dashboard() {
  return (
    <>
      <Heading title="대시보드" />
      <Styled.ProfileCard>
        <Styled.ProfileTop>
          <Styled.ProfileImage src="https://cdn.imweb.me/upload/S20201005f584d937f796b/fd54896845aa4.png" />
        </Styled.ProfileTop>
        <Styled.ProfileContent>
          <Styled.ProfileLeft>
            <h3>김지훈</h3>
            <h6>관리 2팀/로드 매니저</h6>
            <h6 className="introduce">언제든지 긍정적인 마인드로! 😆😆</h6>
          </Styled.ProfileLeft>
          <Styled.ProfileRight>
            {infos.map((info, index) => (
              <ProfileInfo key={index} content={info.content} Icon={info.icon} />
            ))}
          </Styled.ProfileRight>
        </Styled.ProfileContent>
      </Styled.ProfileCard>
    </>
  );
}

export default Dashboard;
