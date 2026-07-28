import express from "express"
import { userCreater, userInfo } from "../controllers/userControllers.js"

const routes = express.Router()

// ! userCreater End API = http://localhost:5000/api/user/
// ! userCreater End API = http://localhost:5000/api/user/info

routes.post("/",userCreater)

routes.get("/info",userInfo)

export default routes