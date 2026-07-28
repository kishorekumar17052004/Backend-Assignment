import express from "express"
import { getRegister, register } from "../controllers/userControllers.js"

const routes = express.Router()

// end API = http://localhost:5000/api/users/register

routes.get("/register",getRegister)

routes.post("/register" , register)

export default routes
