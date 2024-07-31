import NavButton from './NavButton';
import * as Styled from './NavBar.style';
import { navbarItems } from './navLinks';

export default function NavBar() {
  return (
    <Styled.NavBarWrapper>
      <Styled.MyToolbar>
        {navbarItems.map((page) => (
          <NavButton key={page.name} name={page.name} Icon={page.icon} link={page.link} />
        ))}
      </Styled.MyToolbar>
    </Styled.NavBarWrapper>
  );
}
