import express from "express";
import {
  createRegister,
  getDashboard,
  loginUser,
  refreshToken,
} from "../controllers/authControllers.js";
import { authMiddleware } from "../middleware/authMidddleware.js";

const routes = express.Router();

routes.post("/register", createRegister);
routes.post("/login", loginUser);
routes.get("/dashboard", authMiddleware, getDashboard);
routes.post("/refresh", refreshToken);

export default routes;



