import Button from '@mui/joy/Button';
import { styled } from '@mui/joy/styles';
import '../../styles/global.css';

const StyledButton = styled(Button)<{ size?: string; btntype?: string; round?: boolean; disabled?: boolean }>`
  && {
    background-color: ${(props) => (
      props.disabled ? '#d3d3d3' : 
      props.btntype === 'outlined' ? '#373A40' : '#DC5F00')};
    color: ${(props) => (
      props.disabled ? '#a9a9a9' : '#ffffff'
    )};
    border: 1px solid ${(props) => (
      props.disabled ? '#d3d3d3' : 
      props.btntype === 'outlined' ? '#373A40' : '#DC5F00')};
    width: ${(props) => (
      props.size === 'md' ? '18rem' : '8rem')};
    border-radius: ${(props) => (
      props.round ? '15px' : '5px')};
    cursor: ${(props) => (
      props.disabled ? 'not-allowed' : 'pointer')};
    &:hover {
      background-color: ${(props) => (
        props.disabled ? '#d3d3d3' : '#ffffff')};
      color: ${(props) => (
        props.disabled ? '#a9a9a9' : 
        props.btntype === 'outlined' ? '#373A40' : '#DC5F00')};
    }
  }
`;

export default StyledButton