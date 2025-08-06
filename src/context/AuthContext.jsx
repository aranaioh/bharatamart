
import { createContext, useContext, useState } from "react";
import authApi from "../mooks/AuthApi";
import { CloudCog } from "lucide-react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [loading, setLoading] = useState(false);

    // Register function
    const register = async (userData) => {
        setLoading(true);
        try {
            const data = await authApi.register(userData);
            return data;
        } finally {
            setLoading(false);
        }
    };

    // Login function
    const login = async (credentials) => {
        setLoading(true);
        try {

            console.log("Attempting to login with credentials:", credentials);
            // Call the login API
            const data = await authApi.login(credentials);

            console.log("Login response:", data);
            if (data.data.token) {
                localStorage.setItem("token", data.data.token);
                setIsAuthenticated(true);
                setUser(data.data);
            }
            return data;
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    // Get profile (/me)
    const getProfile = async () => {
        setLoading(true);
        try {
            const data = await authApi.profile();
            setUser(data.user || data);
            return data;
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout, getProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
