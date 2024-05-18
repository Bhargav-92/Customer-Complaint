import React, { createContext, useState, useEffect } from 'react';

// Create a context for authentication
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate checking if the user is logged in when the app loads
  useEffect(() => {
    // Replace this with real authentication check logic
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};