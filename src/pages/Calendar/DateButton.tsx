import styled from 'styled-components';
interface DateButtonProps {
  content: string;
  onClick: () => void;
}

export default function DateButton({ content, onClick }: DateButtonProps) {
  return <DateButtonWrapper onClick={onClick}>{content}</DateButtonWrapper>;
}

const DateButtonWrapper = styled.button`
  border: none;
  padding: 0.4rem 0.6rem;
  background-color: var(--color-sec);
  border-radius: 0.3rem;
  font-size: 1.4rem;
  color: var(--color-white);
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: var(--color-tar);
  }
`;
