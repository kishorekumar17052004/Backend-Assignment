import axios from "axios"
const Api = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export const regsiterUser = async(userData)=>{
    const response = await Api.post("/register",userData)
    return response.data;
}

export const loginUser = async(userData)=>{
    const response = await Api.post("/login",userData)
    return response.data
}