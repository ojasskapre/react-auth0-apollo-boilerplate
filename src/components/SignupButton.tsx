import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import React from 'react';

const SignupButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: 'signup',
      },
    });
  };

  return (
    !isAuthenticated && (
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
        onClick={handleSignUp}
      >
        {t('button.signUp')}
      </Button>
    )
  );
};

export default SignupButton;
