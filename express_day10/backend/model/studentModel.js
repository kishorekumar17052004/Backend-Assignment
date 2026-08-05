import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    studentname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
     
    },
    studentage: {
      type: Number,
      required: true,
      trim: true,
    },
    studentcourse: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const studentModel = mongoose.model("student", StudentSchema);
