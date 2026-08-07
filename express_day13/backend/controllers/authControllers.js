import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/authModel.js";

const createTokenPair = (user) => ({
  accessToken: jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET || "secret-key",
    { expiresIn: "15m" }
  ),
  refreshToken: jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET || "refresh-secret",
    { expiresIn: "7d" }
  ),
});

export const createRegister = async (req, res) => {
  try {
    const { name, email, password, balance } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const checkEmail = await userModel.findOne({ email });

    if (checkEmail) {
      return res.status(409).json({ msg: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const parsedBalance = Number(balance || 0);

    const userData = await userModel.create({
      name,
      email,
      password: hashPassword,
      balance: parsedBalance,
    });

    const { accessToken, refreshToken } = createTokenPair(userData);

    res.status(201).json({
      msg: "Successfully registered",
      user: {
        id: userData._id,
        name: userData.name,
        email: userData.email,
        balance: userData.balance,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }

    const checkUser = await userModel.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, checkUser.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    const { accessToken, refreshToken } = createTokenPair(checkUser);

    res.status(200).json({
      msg: "Login successful",
      user: {
        id: checkUser._id,
        name: checkUser.name,
        email: checkUser.email,
        balance: checkUser.balance,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDashboard = async (req, res) => {
  try {
    res.status(200).json({
      msg: "Dashboard data",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken: incomingRefreshToken } = req.body;

    if (!incomingRefreshToken) {
      return res.status(400).json({ msg: "Refresh token is required" });
    }

    const decoded = jwt.verify(
      incomingRefreshToken,
      process.env.JWT_REFRESH_SECRET || "refresh-secret"
    );

    const user = await userModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const accessToken = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "secret-key",
      { expiresIn: "15m" }
    );

    res.status(200).json({
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        balance: user.balance,
      },
    });
  } catch (error) {
    res.status(401).json({ msg: "Invalid refresh token" });
  }
};