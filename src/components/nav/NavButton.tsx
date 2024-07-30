import * as Styled from './NavButton.style';

interface NavButtonProps {
  name: string;
  Icon: React.ReactElement;
  link: string;
}

export default function NavButton({ name, Icon, link }: NavButtonProps) {
  return (
    <Styled.MUIButton key={name}>
      <Styled.LinkRoute to={`${link}`}>
        <Styled.IconWrapper>{Icon}</Styled.IconWrapper>
        <Styled.TextBox>{name}</Styled.TextBox>
      </Styled.LinkRoute>
    </Styled.MUIButton>
  );
}
