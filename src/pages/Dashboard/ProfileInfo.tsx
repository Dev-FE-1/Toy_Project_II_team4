import * as Styled from './ProfileInfo.styled';

interface CardInfoProps {
  content: string;
  Icon: React.ReactElement;
}

export default function ProfileInfo({ content, Icon }: CardInfoProps) {
  return (
    <Styled.ProfileInfoWrapper>
      <Styled.ProfileInfoIcon>{Icon}</Styled.ProfileInfoIcon>
      <Styled.ProfileInfoContent>{content}</Styled.ProfileInfoContent>
    </Styled.ProfileInfoWrapper>
  );
}
