import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js"

dotenv.config();

const app = express();
connectDB();

app.use(cors());

app.use(express.json());

//! auth API = http://localhost:5000/api/auth
app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
