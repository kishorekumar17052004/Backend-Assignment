import express from "express"
import { registerData , loginData } from "../controllers/authControllers.js"


const routes = express.Router()

//! register End Point = http://localhost:5000/api/user/register
routes.post("/register",registerData)

//! register End Point = http://localhost:5000/api/user/login
routes.post("/login",loginData)

export default routes