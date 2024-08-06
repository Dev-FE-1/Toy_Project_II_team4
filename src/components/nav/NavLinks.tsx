import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentsIcon from '@mui/icons-material/Payments';
import { ROUTE_PATHS } from '../../router/paths';

export const navbarItems = [
  {
    name: '홈',
    icon: <HomeIcon />,
    link: ROUTE_PATHS.HOME,
  },
  {
    name: '급여정산',
    icon: <PaymentsIcon />,
    link: ROUTE_PATHS.PAYMENTS,
  },
  {
    name: '정정신청',
    icon: <EditNoteIcon />,
    link: ROUTE_PATHS.ADJUST_SALARY,
  },
  {
    name: '캘린더',
    icon: <CalendarMonthIcon />,
    link: ROUTE_PATHS.CALENDAR,
  },
  {
    name: '마이페이지',
    icon: <AccountCircleIcon />,
    link: ROUTE_PATHS.MY_PAGE,
  },
];
