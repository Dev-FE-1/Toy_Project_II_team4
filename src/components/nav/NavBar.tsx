import NavButton from './NavButton';
import * as Styled from './NavBar.style';
import { navbarItems } from './NavLinks';
import { useNavBar } from '../../hooks/useNavbar';

export default function NavBar() {
  const { selected } = useNavBar();

  return (
    <Styled.NavBarWrapper>
      <Styled.MyToolbar>
        {navbarItems.map((navItem) => (
          <NavButton
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
