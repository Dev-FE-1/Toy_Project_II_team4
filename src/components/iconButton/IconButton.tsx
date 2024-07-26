import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EditIcon from '@mui/icons-material/Edit';
import StyledIconButton from './IconButton.style';

type IconBtnProps = {
  icontype: 'delete' | 'close' | 'logout' | 'download' | 'edit'
}

export default function SIconButton({icontype}: IconBtnProps) {
  switch(icontype){
    case 'delete':
      return (
        <StyledIconButton aria-label="close">
          <DeleteIcon />
        </StyledIconButton>
      )
    case 'close':
      return (
        <StyledIconButton aria-label="close">
          <CloseIcon />
        </StyledIconButton>
      )
    case 'logout':
      return (
        <StyledIconButton aria-label="logout">
          <ExitToAppIcon />
        </StyledIconButton>
      )
    case 'download':
      return (
        <StyledIconButton aria-label="download">
          <ExitToAppIcon />
        </StyledIconButton>
      )
    case 'edit':
      return (
        <StyledIconButton aria-label="edit">
          <EditIcon />
        </StyledIconButton>
      )
    default:
      return null
  }
}