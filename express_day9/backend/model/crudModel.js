import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: Number,
      required: true,
      minlength: 10,
    },
  },
  { timestamps: true },
);

const crudModel = mongoose.model("cruduser", crudSchema);

export default crudModel;
