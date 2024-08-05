import NavButton from './NavButton';
import * as Styled from './NavBar.style';
import { navbarItems } from './NavLinks';
import { useNavBar } from './useNavbar';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const { selected, setSelected } = useNavBar(location.pathname);

  return (
    <Styled.NavBarWrapper>
      <Styled.MyToolbar>
        {navbarItems.map((navItem) => (
          <NavButton
            setSelected={setSelected}
            selected={selected}
            key={navItem.name}
            name={navItem.name}
            Icon={navItem.icon}
            link={navItem.link}
          />
        ))}
      </Styled.MyToolbar>
    </Styled.NavBarWrapper>
  );
}
