import * as Styled from './NavButton.style';

interface NavButtonProps {
  selected: string;
  name: string;
  Icon: React.ReactElement;
  link: string;
}

export default function NavButton({ selected, name, Icon, link }: NavButtonProps) {
  return (
    <Styled.MUIButton key={name} selected={selected === link}>
      <Styled.LinkRoute to={`${link}`}>
        <Styled.IconWrapper>{Icon}</Styled.IconWrapper>
        <Styled.TextBox>{name}</Styled.TextBox>
      </Styled.LinkRoute>
    </Styled.MUIButton>
  );
}
