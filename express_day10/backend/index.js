import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRoute from "./routes/studentRoutes.js"

dotenv.config();

const app = express();
connectDB();

app.use(cors());

app.use(express.json());

//! Student API = http://localhost:5000/api/student
app.use("/api/student",studentRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
