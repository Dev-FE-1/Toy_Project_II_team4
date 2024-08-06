import ProfileCard from './ProfileCard';
import CalendarCard from './CalendarCard';
import NoticeCard from '../salaryList/NoticeCard';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import SalaryCard from './SalaryCard';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
// import { ISchedule } from '../../slices/scheduleSlice';

function Dashboard() {
  const currentDate = new Date();
  const DueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 25);
  const originDate = dayjs(DueDate);
  const finalMonth = originDate.format('MM월 ');
  const finalDay = originDate.format('DD일');

  const navigate = useNavigate();

  const goToSalaryPage = () => navigate(`/salary-detail/3`);

  // const schedules = useSelector((state: RootState) => state.schedules.schedules);
  // 오늘의 스케줄 필터링
  // const todaySchedules = schedules.filter(
  //   (schedule: ISchedule) => schedule.startDate <= today && today <= schedule.endDate
  // );

  return (
    <>
      <ProfileCard />
      <CalendarCard />
      <NoticeCard
        date={finalMonth}
        day={finalDay}
        button={true}
        label={<h5>급여명세서 조회</h5>}
        onClick={goToSalaryPage}
      />
      <SalaryCard />
    </>
  );
}

export default Dashboard;
