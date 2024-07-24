import React, { useContext } from 'react';
import AuthProvider from '../AuthContext/AuthProvider';

const client = ({ children }) => {
  const { isAuthenticated } = useContext(AuthProvider);

  console.log('isAuthentiated', isAuthenticated);
  return (
    <>
      <div> {children}</div>
    </>
  );
};

export default client;
