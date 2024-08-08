import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import * as Styled from './AppLayout.styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../api/firebaseApp';
import { useState } from 'react';
import {} from 'react-redux';

export default function AppLayout() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      } else {
        setIsLogin(true);
      }
    });
  }, []);

  if (!isLogin) return;

  return (
    <Styled.AppLayoutWrapper>
      <Styled.MainContent>
        <Outlet />
      </Styled.MainContent>
      <NavBar />
    </Styled.AppLayoutWrapper>
  );
}
