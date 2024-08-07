import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import * as Styled from './AppLayout.styled';
import { verifyLoginStatus } from '../pages/login/verifyLoginStatus';
import { checkLoginUserStatus } from '../pages/login/checkLoginUserStatus';

export default function AppLayout() {
  verifyLoginStatus();
  const isUserLogined = !!checkLoginUserStatus();
  // if (!isUserLogined) return;

  return (
    <Styled.AppLayoutWrapper>
      <Styled.MainContent>
        <Outlet />
      </Styled.MainContent>
      <NavBar />
    </Styled.AppLayoutWrapper>
  );
}
