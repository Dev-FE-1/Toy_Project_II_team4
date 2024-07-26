import BasicModal from './BasicModal';
import NavBar from '../nav/NavBar';

interface MobileModalProps {
  children?: React.ReactNode[];
}

export default function MobileModal({ children }: MobileModalProps) {
  return <BasicModal nav={NavBar()} children={children} />;
}
