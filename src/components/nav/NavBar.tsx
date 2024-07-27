import NavButton from './NavButton';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import PaymentsIcon from '@mui/icons-material/Payments';
import * as Styled from './NavBar.style';

const pages = [
  {
    name: '홈',
    icon: <HomeIcon />,
  },
  {
    name: '급여정산',
    icon: <PaymentsIcon />,
  },
  {
    name: '정정신청',
    icon: <EditNoteIcon />,
  },
  {
    name: '캘린더',
    icon: <CalendarMonthIcon />,
  },
  {
    name: 'My',
    icon: <AccountCircleIcon />,
  },
];

export default function NavBar() {
  return (
    <Styled.MyAppBar>
      <Styled.MyToolbar>
        {pages.map((page) => (
          <NavButton key={page.name} name={page.name} Icon={page.icon} />
        ))}
      </Styled.MyToolbar>
    </Styled.MyAppBar>
  );
}
