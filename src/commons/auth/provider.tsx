import React, { useReducer, useCallback, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import jwtdecode from 'jwt-decode';

import { Provider } from './context';

const storageKey = 'user-token';

const initialState = {
  user: null,
  error: null,
  status: 'unauthenticated',
};

function authReducer(
  state = initialState,
  event: { type: string; payload?: any },
) {
  switch (event.type) {
    case 'login/authenticating':
      return {
        user: null,
        error: null,
        status: 'loading',
      };

    case 'login/authenticated':
      return {
        user: event.payload,
        error: null,
        status: 'authenticated',
      };

    case 'login/failed':
      return {
        user: null,
        error: event.payload,
        status: 'unauthenticating',
      };

    case 'logout':
      return state;

    default:
      throw new Error('Please use one of the defined states');
  }
}

function AuthProvider(props: React.PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (payload: { email: string; password: string }) => {
    dispatch({ type: 'login/authenticating' });
    loginUser(payload);
  };

  const logout = useCallback(() => {
    dispatch({ type: 'logout' });
    logoutUser();
  }, []);

  async function loginUser(body: { email: string; password: string }) {
      window.location.href = '/admin';
  }

  useEffect(() => {
    const token = window.localStorage.getItem(storageKey);
    if (!token) {
      return;
    }

    try {
      const user = jwtDecode(token);
      dispatch({ type: 'login/authenticated', payload: user });
    } catch (e) {
      dispatch({ type: 'login/failed', payload: e.message });
    }
  }, []);

  const value: any = {
    login,
    logout,
    ...state,
    isAuthenticated: state.status === 'authenticated',
  };
  return <Provider value={value} {...props}></Provider>;
}

function jwtDecode(token: string) {
  return JSON.parse(window.atob(token.split('.')[1]));
}

export function getToken() {
  return localStorage.getItem(storageKey) || '';
}

export function logoutUser() {
  window.localStorage.removeItem(storageKey);
  window.location.reload();
}

export default AuthProvider;
