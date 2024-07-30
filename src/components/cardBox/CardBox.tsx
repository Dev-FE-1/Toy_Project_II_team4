import * as styled from './CardBox.style';
import { ReactNode } from 'react';

function CardBox({ children }: CardBoxProps) {
  return <styled.CardBox>{children}</styled.CardBox>;
}

interface CardBoxProps {
  children: ReactNode;
  className?: string;
}

export default CardBox;
