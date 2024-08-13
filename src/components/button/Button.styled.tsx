import Button from '@mui/joy/Button';

interface StyledButtonProps {
  btnsize?: string;
  btntype?: string;
  round?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}
const StyledButton: React.FC<StyledButtonProps> = ({
  btnsize,
  btntype,
  round,
  disabled,
  children,
  ...otherProps
}) => {
  return (
    <Button
      sx={{
        backgroundColor: disabled
          ? 'var(--color-white)'
          : btntype === 'outlined'
            ? 'var(--color-sec)'
            : 'var(--color-pri)',
        color: disabled
          ? 'var(--border-pri)'
          : btntype === 'outlined'
            ? 'var(--color-pri)'
            : 'var(--color-white)',
        border: `1px solid ${
          disabled ? '#d3d3d3' : btntype === 'outlined' ? 'var(--color-sec)' : 'var(--color-pri)'
        }`,
        width: btnsize === 'md' ? '18rem' : btnsize === 'lg' ? '22rem' : '7.3rem',
        borderRadius: round ? '15px' : '5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: '0.2s',
        '&:hover': {
          backgroundColor: disabled ? '#d3d3d3' : 'var(--color-white)',
          color: disabled ? 'var(--border-pri)' : 'var(--color-pri)',
        },
      }}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
