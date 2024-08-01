import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentsIcon from '@mui/icons-material/Payments';

export const navbarLinks = {
  home: {
    name: '홈',
    icon: <HomeIcon />,
    link: '/home',
  },
  payments: {
    name: '급여정산',
    icon: <PaymentsIcon />,
    link: '/payments',
  },
  adjustSalary: {
    name: '정정신청',
    icon: <EditNoteIcon />,
    link: '/salary-adjustment',
  },
  calendar: {
    name: '캘린더',
    icon: <CalendarMonthIcon />,
    link: '/calendar',
  },
  myPage: {
    name: '마이페이지',
    icon: <AccountCircleIcon />,
    link: '/my-page',
  },
};

export const navbarItems = [
  navbarLinks.home,
  navbarLinks.payments,
  navbarLinks.adjustSalary,
  navbarLinks.calendar,
  navbarLinks.myPage,
];
