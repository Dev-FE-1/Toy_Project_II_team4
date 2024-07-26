import * as Styled from './NavButton.style';

interface NavButtonProps {
  name: string;
  Icon: React.ReactElement;
}

export default function NavButton({ name, Icon }: NavButtonProps) {
  return (
    <Styled.MUIButton key={name}>
      <Styled.IconWrapper>{Icon}</Styled.IconWrapper>
      <Styled.TextBox>{name}</Styled.TextBox>
    </Styled.MUIButton>
  );
}
