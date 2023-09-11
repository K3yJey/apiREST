const { matchedData } = require("express-validator")
const { encrypt, compare } = require("../utils/handlePassword")
const { userModel } = require("../models")
const { tokenSign, verifySign } = require("../utils/handleJWT")
const { handleHttpError } = require("../utils/handleError")

/**
 * Registrar
 */
const registerAuth = async (req, res) => {
  try {
    req = matchedData(req)
    const password = await encrypt(req.password)
    const body = { ...req, password }
    const dataUser = await userModel.module.create(body)
    dataUser.set("password", undefined, { strict: false }) //Impedir que el password tenga validaciones estrictas

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }

    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en registerAuth")
    console.log("Error en registerAuth: ", error)
  }
}

/**
 * Ingresar
 */
const loginAuth = async (req, res) => {
  req = matchedData(req)
  const user = await userModel.module
    .findOne({ email: req.email })
    .select("password name role email") //Porque en el userModel está la propiedad select: false

  if (!user) {
    handleHttpError(res, "No existe el usuario", 404)
    console.log("No existe el usuario: ", error)
  }

  const hashPassword = user.get("password")
  const check = await compare(req.password, hashPassword)

  if (!check) {
    handleHttpError(res, "Contraseña inválida", 401)
    console.log("Contraseña inválida: ", error)
  }

  const data = {
    token: tokenSign(user),
    user
  }

  res.send({ data })
  try {
  } catch (error) {
    handleHttpError(res, "Error en loginAuth")
    console.log("Error en loginAuth: ", error)
  }
}

module.exports = { registerAuth, loginAuth }
