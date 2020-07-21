import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function Authorization(props: React.PropsWithChildren<unknown>) {
  const token = window.localStorage.getItem('user-token');
  const history = useHistory();

  useEffect(() => {
    function verifyUser() {
      if (!token) {
        history.push('/login');
      } else {
        let decoded_token: { exp: number } = jwtDecode(token);

        let expirationDate = new Date(decoded_token.exp * 1000);
        if (expirationDate < new Date()) {
          window.localStorage.removeItem('user-token');
          history.push('/login');
        }
      }
    }
    verifyUser();
  }, [token, history]);

  return <>{props.children}</>;
}
