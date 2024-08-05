import Heading from '../../components/Heading';
import ProfileCard from './ProfileCard';
import CalendarCard from './CalendarCard';
import NoticeCard from '../salaryList/NoticeCard';
import dayjs from 'dayjs';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ISchedule } from '../../slices/scheduleSlice';

function Dashboard() {
  const originDate = dayjs('2024-03-25');
  const finalDate = originDate.format('YYYY년 MM월 ');
  const finalDay = originDate.subtract(0, 'day').format('DD일');
  const navigate = useNavigate();
  const schedules = useSelector((state: RootState) => state.schedules.schedules);

  const today = dayjs().format('YYYY-MM-DD');

  const goToSalaryPage = () => navigate(`/salary-detail/3`);

  // 오늘의 스케줄만 필터링합니다.
  const todaySchedules = schedules.filter(
    (schedule: ISchedule) => schedule.startDate <= today && today <= schedule.endDate
  );

  console.log(todaySchedules);

  return (
    <>
      <Heading title="대시보드" />
      <ProfileCard />
      <CalendarCard />
      <NoticeCard
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
