import React, {
    useState,
    useEffect
} from 'react'
import AuthContext from './AuthContext'


const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState("");

    // get the key from localstorage for login 
    useEffect(() => {
        const loggdIn = localStorage.getItem('loggedIn');
        console.log(loggdIn);
        setIsAuthenticated(loggdIn);
    })

    //  set the state from false to true for login
    const login = (role) => {
        setIsAuthenticated(role);
        localStorage.setItem("loggedIn", role);
    }


    // set the state from true to false for logout
    const logout = (role) => {
        setIsAuthenticated(role);
        localStorage.removeItem("loggedIn");
    }

    return (
        <>
            <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider
