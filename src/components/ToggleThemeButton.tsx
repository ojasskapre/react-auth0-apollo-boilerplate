import { useTheme } from '../hooks/useTheme';
import Button from '@mui/material/Button';

const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      Toggle Theme
    </Button>
  );
};

export default ToggleThemeButton;
