import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoute from  "./routes/userRoutes.js"

dotenv.config()

const app = express()

connectDB()

app.use(cors())

app.use(express.json())


const PORT = process.env.PORT || 3000

app.use("/api/user",userRoute)



app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

// ! user API = http://localhost:5000/api/user