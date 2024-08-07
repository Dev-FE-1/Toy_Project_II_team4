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
  background-color: var(--color-pri);
  border-radius: 0.3rem;
  font-size: 1.2rem;
  color: var(--color-white);
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: var(--font-pri);
    background-color: var(--color-sec);
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
