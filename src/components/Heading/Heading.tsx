import * as styled from './Heading.styled';

export default function Heading({ title }: { title: string }) {
  return (
    <styled.Heading>
      <h1>{title}</h1>
    </styled.Heading>
  );
}
