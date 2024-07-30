import Button from '@mui/joy/Button';
import { styled } from '@mui/joy/styles';

const StyledButton = styled(Button)<{
  btnsize?: string;
  btntype?: string;
  round?: string;
  disabled?: boolean;
}>`
  && {
    background-color: ${(props) =>
      props.disabled ? 'var(--color-white)' : props.btntype === 'outlined' ? 'var(--color-sec)' : 'var(--color-pri)'};
    color: ${(props) => (props.disabled ? 'var(--border-pri)' : 'var(--color-white)')};
    border: 1px solid
      ${(props) =>
        props.disabled ? '#d3d3d3' : props.btntype === 'outlined' ? 'var(--color-sec)' : 'var(--color-pri)'};
    width: ${(props) =>
      props.btnsize === 'md' ? '18rem' : props.btnsize === 'lg' ? '22rem' : '7.3rem'};
    border-radius: ${(props) => (props.round === 'true' ? '15px' : '5px')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    &:hover {
      background-color: ${(props) => (props.disabled ? '#d3d3d3' : 'var(--color-white)')};
      color: ${(props) =>
        props.disabled ? 'var(--border-pri)' : props.btntype === 'outlined' ? '#373A40' : 'var(--color-pri)'};
    }
  }

  transition: 0.2s;
`;

export default StyledButton;
