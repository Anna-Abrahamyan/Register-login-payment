import pkg from "express";
import controller from "../controllers/auth.controller.js";
import validator from "../validator/user.validator.js";
import paymentApi from "../stripe/payment.js";

const { register, login } = controller;
const { registerValidator, loginValidator } = validator;
const { payment } = paymentApi;

const { Router } = pkg;
const router = Router();
router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

export default router;
