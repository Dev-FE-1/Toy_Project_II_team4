import Heading from '../../components/Heading/Heading';
import ProfileCard from './components/ProfileCard';
import CalendarCard from './components/CalendarCard';
import SalaryStatementCard from './components/SalaryStatementCard';

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
