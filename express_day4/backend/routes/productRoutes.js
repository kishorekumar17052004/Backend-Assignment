import express from "express"
import { getProducts, postProducts } from "../controllers/productControllers.js"

const routes = express.Router()
//! end point 
//! products API = http://localhost:5000/api/product/


routes.get("/",getProducts)
routes.post("/", postProducts)


export default routes
