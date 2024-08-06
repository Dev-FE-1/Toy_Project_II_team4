import { useMemo } from 'react';
import { navbarItems } from './NavLinks';
import { useLocation } from 'react-router-dom';

export function useNavBar() {
  const location = useLocation();

  const selected = useMemo(
    () => navbarItems.find((item) => item.link === location.pathname)?.link || '',
    [location.pathname]
  );
  return { selected };
}
