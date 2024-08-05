import Btn from '../../components/button/Button';
import ProfileCard from '../Dashboard/components/ProfileCard';
import { useMyPage } from './useMyPage';

export function MyPage() {
  const { handleLogout } = useMyPage();
  return (
    <div>
      <h1>마이페이지</h1>
      <ProfileCard />
      <div>
        <Btn onClick={handleLogout} label="로그 아웃" />
      </div>
    </div>
  );
}
