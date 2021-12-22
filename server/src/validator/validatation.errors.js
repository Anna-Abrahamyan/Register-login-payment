import validator from "express-validator";
const { validationResult } = validator;

const errorsReg = async (req, res) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Incorrect data during registration",
    });
  }
};

const errorsLog = async (req, res) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
      message: "Incorrect data during login",
    });
  }
};

const obj3 = {
  errorsReg,
  errorsLog,
};
export default obj3;
