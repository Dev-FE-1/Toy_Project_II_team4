import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import * as Styled from './AppLayout.styled';
import { verifyLoginStatus } from '../pages/login/verifyLoginStatus';

export default function AppLayout() {
  verifyLoginStatus();
  return (
    <Styled.AppLayoutWrapper>
      <Styled.MainContent>
        <Outlet />
      </Styled.MainContent>
      <NavBar />
    </Styled.AppLayoutWrapper>
  );
}
