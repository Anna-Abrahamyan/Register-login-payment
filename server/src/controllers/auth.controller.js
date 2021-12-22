import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import errors from "../validator/validatation.errors.js";

const { errorsReg, errorsLog } = errors;

const register = async (req, res) => {
  try {
    errorsReg();
    const { firstName, lastName, email, username, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "This email has already registered.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).json({ message: "Registration created." });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

const login = async (req, res) => {
  try {
    errorsLog();
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (user.username !== username || !isMatch) {
      return done(null, false, { message: "valid password or username." });
    }

    const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
      expiresIn: "1h",
    });
    res.json({ token, userId: user.id });
  } catch (e) {
    res.status(500).json({ message: "Inccorect username or password." });
  }
};
const obj1 = { register, login };

export default obj1;
