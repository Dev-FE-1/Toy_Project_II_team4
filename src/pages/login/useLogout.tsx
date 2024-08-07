import { logout } from '../../slices/authSlice';
import { useDispatch } from 'react-redux';

export function useLogout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return { handleLogout };
}
