import { useTheme } from './hooks/useTheme';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h4">{t('text')}</Typography>
      <Typography variant="h5">{theme}</Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default App;
