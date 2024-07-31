import CloseIcon from '@mui/icons-material/Close';
import * as styled from './BasicModal.style';

interface CloseButtonProps {
  handleClose: () => void;
}

export function CloseButton({ handleClose }: CloseButtonProps) {
  return (
    <styled.CloseButton onClick={handleClose}>
      <CloseIcon />
    </styled.CloseButton>
  );
}
