import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavButton from './NavButton';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = [
  {
    name: '홈',
    icon: HomeIcon,
  },
  {
    name: '급여정산',
    icon: AttachMoneyIcon,
  },
  {
    name: '정정신청',
    icon: EditNoteIcon,
  },
  {
    name: '캘린더',
    icon: CalendarMonthIcon,
  },
  {
    name: '마이페이지',
    icon: AccountCircleIcon,
  },
];

export default function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        disableGutters
      >
        {pages.map((page) => (
          <NavButton key={page.name} page={page.name} icon={page.icon} />
        ))}
      </Toolbar>
    </AppBar>
  );
}
