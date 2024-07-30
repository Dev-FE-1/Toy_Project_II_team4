import * as Styled from './ProfileList.styled';

interface CardInfoProps {
  key: number;
  content: string;
  Icon: React.ReactElement;
}

export default function ProfileInfo({ key, content, Icon }: CardInfoProps) {
  return (
    <Styled.ProfileInfoWrapper key={key}>
      <Styled.ProfileInfoIcon>{Icon}</Styled.ProfileInfoIcon>
      <Styled.ProfileInfoContent>{content}</Styled.ProfileInfoContent>
    </Styled.ProfileInfoWrapper>
  );
}
