
import axios from "axios";


const API_BASE_URL  = import.meta.env.VITE_API_BASE_URL;

const userApi = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

//* GET /api/users
export const getUsers = async () => {
  const response = await userApi.get("/info");

  return response.data;
};

//* POST /api/users
export const createUser = async (userData) => {
  const response = await userApi.post("/create", userData);

  return response.data;
};
