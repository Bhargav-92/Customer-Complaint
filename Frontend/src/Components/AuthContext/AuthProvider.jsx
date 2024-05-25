import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState("");

    // get the key from localstorage for login 
    useEffect(() => {
        const loggedInRole = localStorage.getItem('loggedIn');
        setIsAuthenticated(loggedInRole);
    }, []);

    const navigate = useNavigate(); // Initialize useNavigate hook for redirection

    // set the state from false to true for login
    const login = (role) => {
        setIsAuthenticated(role);
        localStorage.setItem("loggedIn", role);

        // Redirect based on user role
        if (role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/home');
        }
    }

    // set the state from true to false for logout
    const logout = () => {
        setIsAuthenticated("");
        localStorage.removeItem("loggedIn");
        navigate('/login'); // Redirect to login page after logout
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
