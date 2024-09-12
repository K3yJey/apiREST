const { check } = require("express-validator")

const validateResult = require("../utils/handleValidator")
const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail({ min: 3, max: 15 }),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => validateResult(req, res, next)
]

const validatorLogin = [
  check("email").exists().notEmpty().isEmail({ min: 3, max: 15 }),
  check("password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => validateResult(req, res, next)
]

module.exports = { validatorRegister, validatorLogin }
