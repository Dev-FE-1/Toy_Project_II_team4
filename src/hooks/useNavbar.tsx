import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavBar() {
  const location = useLocation();

  const selected = useMemo(() => location.pathname.replace(/\/\d+$/, ''), [location.pathname]);
  return { selected };
}
