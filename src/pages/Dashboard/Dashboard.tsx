import Heading from '../../components/Heading';
import ProfileCard from './components/ProfileCard';
import CalendarCard from './components/CalendarCard';
import NoticeCard from '../salaryList/NoticeCard';
import dayjs from 'dayjs';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const originDate = dayjs('2024-03-25');
  const finalDate = originDate.format('YYYY년 MM월 ');
  const finalDay = originDate.subtract(0, 'day').format('DD일');
  const navigate = useNavigate();

  const goToSalaryPage = () => navigate(`/salary-detail/3`);

  return (
    <>
      <Heading title="대시보드" />
      <ProfileCard />
      <CalendarCard />
      <NoticeCard
        date={finalDate}
        day={finalDay}
        button={true}
        label={
          <h5>
            <ListOutlinedIcon />
            급여명세서 조회
          </h5>
        }
        onClick={goToSalaryPage}
      />
    </>
  );
}

export default Dashboard;
