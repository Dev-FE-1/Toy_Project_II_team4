import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from './IconButton.style';
import { MouseEventHandler } from 'react';

type IconBtnProps = {
  icontype: 'delete' | 'close' | 'logout' | 'download' | 'edit'
  onClick?:MouseEventHandler<HTMLButtonElement>;
}

export default function IconBtn({icontype, onClick}: IconBtnProps) {
  switch(icontype){
    case 'delete':
      return (
        <StyledIconButton aria-label="close" onClick={onClick}>
          <DeleteIcon />
        </StyledIconButton>
      )
    case 'close':
      return (
        <StyledIconButton aria-label="close" onClick={onClick}>
          <CloseIcon />
        </StyledIconButton>
      )
    case 'logout':
      return (
        <StyledIconButton aria-label="logout" onClick={onClick}>
          <ExitToAppIcon />
        </StyledIconButton>
      )
    case 'download':
      return (
        <StyledIconButton aria-label="download" onClick={onClick}>
          <ExitToAppIcon />
        </StyledIconButton>
      )
    case 'edit':
      return (
        <StyledIconButton aria-label="edit" onClick={onClick}>
          <EditIcon />
        </StyledIconButton>
      )
    default:
      return null
  }
}