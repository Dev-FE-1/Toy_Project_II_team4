import { logout } from '../login/login';

export function useMyPage() {
  return {
    // 로그아웃 처리
    handleLogout() {
      logout();
    },
  };
}
