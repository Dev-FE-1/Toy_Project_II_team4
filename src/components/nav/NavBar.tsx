import HomeIcon from '@mui/icons-material/Home';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaidIcon from '@mui/icons-material/Paid';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import * as Styled from './NavBar.style';
import { NavLink } from 'react-router-dom';

import { ROUTE_PATHS } from '../../router/paths';

export const navbarItems = [
  {
    name: '홈',
    icon: <HomeIcon className="home-icon" />,
    link: ROUTE_PATHS.HOME,
  },
  {
    name: '급여정산',
    icon: <PaidIcon className="payments-icon" />,
    link: ROUTE_PATHS.PAYMENTS,
  },
  {
    name: '정정신청',
    icon: <BorderColorIcon className="edit-icon" />,
    link: ROUTE_PATHS.ADJUST_SALARY,
  },
  {
    name: '캘린더',
    icon: <EditCalendarIcon className="calendar-icon" />,
    link: ROUTE_PATHS.CALENDAR,
  },
  {
    name: '마이페이지',
    icon: <AccountCircleIcon className="mypage-icon" />,
    link: ROUTE_PATHS.MY_PAGE,
  },
];

export default function NavBar() {
  return (
    <Styled.NavBarContainer>
      <ul className="navbar-ul-items">
        {navbarItems.map(({ name, icon, link }) => (
          <li className="navbar-li-item" key={name}>
            <NavLink to={`${link}`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              <div className="icon-box">{icon}</div>
              <div className="text-box">{name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </Styled.NavBarContainer>
  );
}
