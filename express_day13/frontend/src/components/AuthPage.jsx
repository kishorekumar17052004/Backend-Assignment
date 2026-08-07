import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "", balance: 0 });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const endpoint = isLogin ? "/login" : "/register";
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password, balance: Number(form.balance) };

      const res = await axios.post(`${API_URL}${endpoint}`, payload);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage(res.data.msg || "Success");
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">{isLogin ? "Login" : "Register"}</h2>
        <p className="text-sm text-slate-500 mb-6">{isLogin ? "Welcome back" : "Create a new account"}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                name="balance"
                type="number"
                value={form.balance}
                onChange={handleChange}
                placeholder="Initial balance"
                className="w-full border rounded px-3 py-2"
              />
            </>
          )}

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
            required
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
            required
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-center text-red-600">{message}</p>}

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-sm text-blue-600 underline"
        >
          {isLogin ? "Create an account" : "Already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
