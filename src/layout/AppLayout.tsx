import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import * as Styled from './AppLayout.styled';

export default function AppLayout() {
  return (
    <Styled.AppLayoutWrapper>
      <Styled.MainContent>
        <Outlet />
      </Styled.MainContent>
      <NavBar />
    </Styled.AppLayoutWrapper>
  );
}
