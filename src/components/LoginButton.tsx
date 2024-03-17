import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import React from 'react';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    !isAuthenticated && (
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
        onClick={() => {
          loginWithRedirect();
        }}
      >
        {t('button.login')}
      </Button>
    )
  );
};

export default LoginButton;
