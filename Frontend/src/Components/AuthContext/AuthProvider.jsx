import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for redirection

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate hook for redirection

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const role = localStorage.getItem('role');

        if (isAuthenticated && role) {
            setIsAuthenticated(true);
            setRole(role);
        }
    }, []);

    const login = (token, user) => {
        setIsAuthenticated(true);
        setRole(user.role);
        localStorage.setItem('token', token); 
        localStorage.setItem('user', JSON.stringify(user)); 
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem('role', user.role)

        if(user.role === "admin"){
            navigate('/dashboard');
        }

        if(user.role === "user"){
            navigate('/home');
        }
    }

    // set the state from true to false for logout
    const logout = () => {
        setIsAuthenticated(false);
        setRole("");
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem("role");
        navigate('/login'); // Redirect to login page after logout
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout , role}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
