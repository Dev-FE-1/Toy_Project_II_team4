import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../api/firebaseApp';
export function verifyLoginStatus() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });
  }, []);
}
