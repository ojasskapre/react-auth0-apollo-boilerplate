import { useTheme } from './hooks/useTheme';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Typography variant="h5">{theme}</Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default App;
