import express from "express"
import { registerData , getData , singleData, deleteData, updateData } from "../controllers/userControllers.js"

const routes = express.Router() 

//! post API End Point = http://localhost:5000/api/user/register
routes.post("/register",registerData)

//! get API End Point = http://localhost:5000/api/user/info
routes.get("/info",getData)

//! get Params API End Point = http://localhost:5000/api/user/info/singleuser/
routes.get("/info/singleuser/:id",singleData)
//! Delete API End Point = http://localhost:5000/api/user/info/delete/
routes.delete("/info/delete/:id",deleteData)

//! Delete API End Point = http://localhost:5000/api/user/info/updateuser/
routes.put("/info/updateuser/:id",updateData)



export default routes