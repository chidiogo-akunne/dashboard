import React from 'react';
import jwtDecode from 'jwt-decode';

export interface AutorizedHOC {
  isAuthorized?: boolean;
  decodedToken?: DecodedToken;
}

interface DecodedToken {
  role: string;
  exp: number;
  email: string;
  iat: number;
  id: string;
}

const WithIsAuthorized = (Component: React.ComponentType<AutorizedHOC>) => {
  const token = localStorage.getItem('user-token');

  let isAuthorized: boolean;
  let tokenDecoded: DecodedToken;

  try {
    if (!token) {
      isAuthorized = false;
    } else {
      const decodedToken = jwtDecode<DecodedToken>(token);

      tokenDecoded = decodedToken;

      isAuthorized = decodedToken.exp < Date.now() / 1000 ? false : true;
    }
  } catch (error) {
    isAuthorized = false;
  }

  return () => (
    <>
      <Component isAuthorized={isAuthorized} decodedToken={tokenDecoded} />
    </>
  );
};

export default WithIsAuthorized;
