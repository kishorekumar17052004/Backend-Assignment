import express from "express"
import { userCreater, userInfo, userParams } from "../controllers/userControllers.js"

const routes = express.Router()

// ! userCreater End API = http://localhost:5000/api/user/
// ! userCreater End API = http://localhost:5000/api/user/info
// ! userParams End API = http://localhost:5000/api/user/info/121

routes.post("/",userCreater)
routes.post("/info/:id",userParams)

routes.get("/info",userInfo)

export default routes