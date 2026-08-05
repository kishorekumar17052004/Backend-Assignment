import authModel from "../model/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "please fill the field" });
    }

    const userExist = await authModel.findOne({ email });
    if (userExist) {
      return res.status(409).json({ msg: "email already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userData = await authModel.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(200).json({ msg: "register successfully ", userData });
  } catch (error) {
    res.status(500).json({ msg:error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkUser = await authModel.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({ msg: "user not found" });
    }

    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res
      .status(200)
      .json({
        msg: "successfully login",
        token,
        id: checkUser._id,
        name: checkUser.name,
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
