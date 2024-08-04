import styled from 'styled-components';

export default function Heading({ title }: { title: string }) {
  return (
    <HeadingWrapper>
      <h2>{title}</h2>
    </HeadingWrapper>
  );
}

const HeadingWrapper = styled.div`
  height: 54px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;

  h2 {
    margin-left: 8px;
  }
`;
