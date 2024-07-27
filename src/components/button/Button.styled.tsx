import Button from '@mui/joy/Button';
import { styled } from '@mui/joy/styles';
import '../../styles/global.css';

const StyledButton = styled(Button)<{  size?: string; btntype?: string}>`
  && {
    background-color: ${(props) =>(props.btntype === 'outlined' ? '#373A40' : '#DC5F00')};
    color: #ffffff;
    border: 1px solid ${(props) => props.btntype === 'outlined' ? '#373A40' : '#DC5F00'};
    border-radius: 5px;
    width: ${(props) => props.size === 'md' ? '13rem': '5rem'};

    &:hover {
      background-color: #ffffff;
      color: ${(props) =>  props.btntype === 'outlined' ? '#373A40' : '#DC5F00'};
    }
  }
`;

export default StyledButton