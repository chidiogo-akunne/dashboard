import React from 'react';

import { useAuthContext } from '../../commons/auth/context';
import LoginForm from './loginForm';

function Login() {
  const auth = useAuthContext();

  if (auth.isAuthenticated) {
    return <>You are already logged in</>;
  }

  const { login, status } = auth;

  return (
    <>
      <LoginForm
        onSubmit={login}
        loading={status === 'loading'}
      />
    </>
  );
}

export default Login;
