import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export function checkLoginUserStatus() {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);
  return user;
}
