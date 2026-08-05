import express from "express"
import { loginUser, registerUser } from "../controllers/authControllers.js"

const routes = express.Router()

//! register post api with end point =  http://localhost:5000/api/auth/register
routes.post("/register",registerUser)

//! login post api with end point =  http://localhost:5000/api/auth/login
routes.post("/login",loginUser)

export default routes