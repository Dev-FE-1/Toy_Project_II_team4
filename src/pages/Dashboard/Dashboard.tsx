import Heading from '../../components/Heading/Heading';
import ProfileCard from './ProfileCard';
import CalendarCard from './CalendarCard';
import SalaryStatementCard from './SalaryStatementCard';

function Dashboard() {
  return (
    <>
      <Heading title="대시보드" />
      <ProfileCard />
      <CalendarCard />
      <SalaryStatementCard />
    </>
  );
}

export default Dashboard;
