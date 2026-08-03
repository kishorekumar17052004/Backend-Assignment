import express from "express"
import { createData, getData } from "../controllers/crudControllers.js"



const routes = express.Router()

//! user post API End Point  = http://localhost:5000/api/user/create - {}
routes.post("/create",createData)

//! user get API End Point = http://localhost:5000/api/user/info - {}
routes.get("/info",getData)

export default routes