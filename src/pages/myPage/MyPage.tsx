import Btn from '../../components/button/Button';
import ProfileCard from '../Dashboard/ProfileCard';
import { useLogout } from '../login/useLogout';

export function MyPage() {
  const { handleLogout } = useLogout(); // TODO 하이오더 컴포넌트 필요
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
