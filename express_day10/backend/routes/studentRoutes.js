import express from "express"
import { createStudent ,getStudent,getOneData,updateData,removeData } from "../controllers/studentControllers.js"

const routes = express.Router()

//! student post api with end point  = http://localhost:5000/api/student/create
routes.post("/create",createStudent)

//! student get api with end point = http://localhost:5000/api/student/info
routes.get("/info",getStudent)

//! student get single user api with end point = http://localhost:5000/api/student/info/
routes.get("/info/:id",getOneData)

//! student put api with end point = http://localhost:5000/api/student/update/
routes.put("/update/:id",updateData)

//! student get api with end point = http://localhost:5000/api/student/remove/
routes.delete("/remove/:id",removeData)



export default routes