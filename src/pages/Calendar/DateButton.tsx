import * as Styled from './DateButton.styled';

interface DateButtonProps {
  content: string;
}

export default function DateButton({ content }: DateButtonProps) {
  return <Styled.DateButtonWrapper>{content}</Styled.DateButtonWrapper>;
}
