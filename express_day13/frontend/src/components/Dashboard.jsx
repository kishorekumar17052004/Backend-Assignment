import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get(`${API_URL}/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        setMessage(err.response?.data?.msg || "Session expired");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
        <p className="text-sm text-slate-500 mb-6">Protected page</p>

        {user ? (
          <div className="space-y-3">
            <div className="rounded bg-slate-50 p-4">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Balance:</strong> ${user.balance}</p>
            </div>
            <button onClick={handleLogout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        ) : (
          <p>{message || "Loading..."}</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
