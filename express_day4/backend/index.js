import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./routes/userRoutes.js"
import productRoute from "./routes/productRoutes.js"

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/users",userRoute)

app.use("/api/product",productRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

//! user API = http://localhost:5000/api/users

//! products API = http://localhost:5000/api/product
