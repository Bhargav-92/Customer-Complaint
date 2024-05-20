import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
