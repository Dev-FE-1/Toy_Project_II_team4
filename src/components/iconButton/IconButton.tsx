import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from './IconButton.style';
import { IconButtonProps } from '@mui/material';

type IconBtnProps = {
  icontype: 'delete' | 'close' | 'logout' | 'download' | 'edit'
}

type combineProps = IconBtnProps & IconButtonProps 

export default function IconBtn({icontype, ...props}: combineProps) {
  switch(icontype){
    case 'delete':
      return (
        <StyledIconButton aria-label="close" {...props}>
          <DeleteIcon />
        </StyledIconButton>
      )
    case 'close':
      return (
        <StyledIconButton aria-label="close" {...props}>
          <CloseIcon />
        </StyledIconButton>
      )
    case 'logout':
      return (
        <StyledIconButton aria-label="logout" {...props}>
          <ExitToAppIcon />
        </StyledIconButton>
      )
    case 'download':
      return (
        <StyledIconButton aria-label="download" {...props}>
          <DownloadIcon />
        </StyledIconButton>
      )
    case 'edit':
      return (
        <StyledIconButton aria-label="edit" {...props}>
          <EditIcon />
        </StyledIconButton>
      )
    default:
      return null
  }
}