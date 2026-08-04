import express from "express"
import { createStudent ,getStudent } from "../controllers/studentControllers.js"

const routes = express.Router()

//! student post api with end point  = http://localhost:5000/api/student/create
routes.post("/create",createStudent)

//! student get api with end point = http://localhost:5000/api/student/info
routes.get("/info",getStudent)
export default routes