import styled from 'styled-components';

export default function Heading({ title }: { title: string }) {
  return (
    <HeadingWrapper>
      <h2>{title}</h2>
    </HeadingWrapper>
  );
}

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: -1.5rem;
  margin-bottom: 0;
  padding: 1.2rem 1.5rem;
`;
