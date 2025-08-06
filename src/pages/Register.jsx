

import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useNavigate } from "react-router-dom";

const registerInfo = {
  logo: "/Bharatmart_logo_200.png",
  title: "Welcome to Bharat-Mart!",
  subtitle: "Your one-stop shop for everything you need.",
  description:
    "Register now to access exclusive deals, fast delivery, and a seamless shopping experience. Join thousands of happy customers and start your e-commerce journey today!",
  features: [
    "Fast & secure checkout",
    "Easy returns & refunds",
    "Track your orders in real-time"
  ],
};


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { register, loading } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      showToast("Please accept the terms and conditions.", { type: "error" });
      return;
    }
    try {
      const res = await register({ email, password });
      if (res && res.status === "SUCCESS") {
        showToast(res.message || "Registration successful!", { type: "success" });
        navigate("/login");
      } else {
        showToast(res?.message || "Registration failed", { type: "error" });
      }
    } catch (err) {
      showToast("Registration failed", { type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e6effd] to-[#f5f8ff]">
      <div className="flex w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden bg-white">
        {/* Left Info Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-[#1e293b] to-[#334155] text-white w-1/2 p-10 relative">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src={registerInfo.logo} alt="logo" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-center">{registerInfo.title}</h2>
            <h3 className="text-lg font-semibold mb-2 text-center">{registerInfo.subtitle}</h3>
            <p className="text-center text-sm opacity-80 mb-6">{registerInfo.description}</p>
            <div className="border-t border-gray-600 my-6"></div>
            <h3 className="text-lg font-semibold mb-2">Why join Bharat-Mart?</h3>
            <ul className="space-y-2 text-sm">
              {registerInfo.features.map((feature, idx) => (
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
            <h2 className="text-2xl font-bold mb-2 text-center">Sign up</h2>
            <p className="text-center text-gray-500 mb-6">Fill in the fields below to create your account.</p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input type="email" placeholder="Email address..." className="w-full" required value={email} onChange={e => setEmail(e.target.value)} />
              <Input type="password" placeholder="Password" className="w-full" required value={password} onChange={e => setPassword(e.target.value)} />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" className="accent-primary-bg" required checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} />
                <label htmlFor="terms" className="text-sm text-gray-600">I accept the <a href="#" className="text-primary-bg underline">terms and conditions</a>.</label>
              </div>
              <Button type="submit" className="w-full bg-primary-bg text-white font-semibold py-2 rounded" disabled={loading}>{loading ? "Signing up..." : "Sign up"}</Button>
            </form>
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account? <a href="/login" className="text-primary-bg font-semibold underline">Sign in here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;