import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  ThemeProvider as CustomThemeProvider,
  ThemeContext,
} from './ThemeContext';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <App />
          </MuiThemeProvider>
        )}
      </ThemeContext.Consumer>
    </CustomThemeProvider>
  </React.StrictMode>
);
