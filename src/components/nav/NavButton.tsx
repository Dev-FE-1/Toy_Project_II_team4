import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

export default function NavButton({ page, icon: Icon }) {
  return (
    <Button
      key={page}
      sx={{
        my: 2,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transition: 'background-color 0.3s',
        },
      }}
    >
      {Icon && <Icon sx={{ mr: 1 }} />}
      {page}
    </Button>
  );
}
