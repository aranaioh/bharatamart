//Login page

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useNavigate } from "react-router-dom";

const loginInfo = {
  logo: "/Bharatmart_logo_200.png",
  title: "Welcome Back to Bharat-Mart!",
  subtitle: "Sign in to continue your shopping journey.",
  description:
    "Access your account to view orders, track deliveries, and enjoy exclusive member benefits. Shop smarter and faster with Bharat-Mart.",
  features: [
    "Personalized recommendations",
    "Order tracking & history",
    "Member-only deals"
  ],
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });

      if (res && res.status === "SUCCESS") {
        showToast(res.message || "Login successful!", { type: "success" });
        navigate("/");
      } else {
        showToast(res?.message || "Login failed", { type: "error" });
      }
    } catch (err) {
      showToast("Login failed", { type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e6effd] to-[#f5f8ff]">
      <div className="flex w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden bg-white">
        {/* Left Info Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-[#1e293b] to-[#334155] text-white w-1/2 p-10 relative">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={loginInfo.logo} alt="logo" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-center">{loginInfo.title}</h2>
            <h3 className="text-lg font-semibold mb-2 text-center">{loginInfo.subtitle}</h3>
            <p className="text-center text-sm opacity-80 mb-6">{loginInfo.description}</p>
            <div className="border-t border-gray-600 my-6"></div>
            <h3 className="text-lg font-semibold mb-2">Why sign in?</h3>
            <ul className="space-y-2 text-sm">
              {loginInfo.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md mx-auto">
            <div className="flex md:hidden items-center justify-center mb-4">
              <img src="/Bharatmart_logo_200.png" alt="logo" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-center">Sign in</h2>
            <p className="text-center text-gray-500 mb-6">Enter your credentials to access your account.</p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input type="email" placeholder="Email address..." className="w-full" required value={username} onChange={e => setUsername(e.target.value)} />
              <Input type="password" placeholder="Password" className="w-full" required value={password} onChange={e => setPassword(e.target.value)} />
              <Button type="submit" className="w-full bg-primary-bg text-white font-semibold py-2 rounded" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</Button>
            </form>
            <div className="text-center mt-4 text-sm text-gray-600">
              Don't have an account? <a href="/register" className="text-primary-bg font-semibold underline">Register here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;