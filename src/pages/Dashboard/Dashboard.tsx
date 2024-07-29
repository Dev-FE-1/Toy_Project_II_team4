import { CardBox } from '../../components/cardBox/CardBox.style';
import Heading from '../../components/Heading/Heading';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export default function Dashboard() {
  return (
    <>
      <Heading title="대시보드" />
      <CardBox></CardBox>
      <CardBox />
    </>
  );
}
