import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const styledIconButton = styled(IconButton)`
  &&{
  &:focus {
    outline: 'none',
    boxShadow: 'none',
  }
}`

export default styledIconButton