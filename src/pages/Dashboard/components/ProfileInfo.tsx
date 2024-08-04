import styled from 'styled-components';

interface CardInfoProps {
  content: string;
  Icon: React.ReactElement;
}

export default function ProfileInfo({ content, Icon }: CardInfoProps) {
  return (
    <ProfileInfoWrapper>
      <ProfileInfoIcon>{Icon}</ProfileInfoIcon>
      <ProfileInfoContent>{content}</ProfileInfoContent>
    </ProfileInfoWrapper>
  );
}

const ProfileInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;
const ProfileInfoIcon = styled.div`
  display: block;
  background-color: var(--color-pri);
  color: var(--color-white);
  border-radius: 50%;
  padding: 0.4rem;
`;
const ProfileInfoContent = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
