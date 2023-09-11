const express = require("express")
const router = express.Router()
const { registerAuth, loginAuth } = require("../controllers/auth")
const { validatorRegister, validatorLogin } = require("../validators/auth")

/**
 * Registrar
 */
router.post("/register", validatorRegister, registerAuth)

/**
 * Ingresar
 */
router.post("/login", validatorLogin, loginAuth)

module.exports = router
