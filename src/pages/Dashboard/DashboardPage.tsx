import ProfileCard from './ProfileCard';
import CalendarCard from './CalendarCard';
import SalaryCard from './SalaryCard';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
// import { ISchedule } from '../../slices/scheduleSlice';

function Dashboard() {
  // const schedules = useSelector((state: RootState) => state.schedules.schedules);
  // 오늘의 스케줄 필터링
  // const todaySchedules = schedules.filter(
  //   (schedule: ISchedule) => schedule.startDate <= today && today <= schedule.endDate
  // );

  return (
    <>
      <ProfileCard />
      <CalendarCard />
      <SalaryCard />
    </>
  );
}

export default Dashboard;
