import React, { createContext, useState, useEffect } from 'react';
import { loginServer } from '../service/auth';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const data = await loginServer(email, password);
            const userData = { email, token: data.token, isAdmin: data.isAdmin };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            navigate("/"); 
        } catch (error) {
            console.log(error)
            alert("Invalid username or password");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate("/")
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
