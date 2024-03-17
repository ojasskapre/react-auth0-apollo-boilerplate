import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  ThemeProvider as CustomThemeProvider,
  ThemeContext,
} from './services/ThemeContext';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import './services/i18n/i18n';
import { Auth0Provider } from '@auth0/auth0-react';

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
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <CustomThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <MuiThemeProvider
              theme={theme === 'light' ? lightTheme : darkTheme}
            >
              <App />
            </MuiThemeProvider>
          )}
        </ThemeContext.Consumer>
      </CustomThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
