const express = require("express")
const router = express.Router()
const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { validatorRegister, validatorLogin } = require("../validators/auth")
const { userModel } = require("../models")

/**
 * Registrar
 */
router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req)
  const password = await encrypt(req.password)
  const body = { ...req, password }
  const data = await userModel.module.create(body)

  data.send("password", undefined, { strict: false }) //Impedir que el password tenga validaciones estrictas
  res.send({ data })
})

/**
 * Ingresar
 */
router.post("/login", validatorLogin, async (req, res) => {})

module.exports = router
