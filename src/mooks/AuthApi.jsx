import axios from "axios";

class AuthApi {
    async register(userData) {
        try {
            const user = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, userData);
            return user.data;
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    }

    async login(credentials) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, credentials);
            return response.data;
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    }

    async profile() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Fetching profile failed:", error);
            throw error;
        }
    }
}

const authApi = new AuthApi();
export default authApi;
