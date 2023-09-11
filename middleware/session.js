const { handleHttpError } = require("../utils/handleError")
const { verifySign } = require("../utils/handleJWT")
const userSchema = require("../models/nosql/user")

//Agregar en BearerToken de Postman el token de session
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "No token", 401)
    } else {
      const token = req.headers.authorization.split(" ").pop()
      const dataToken = await verifySign(token)

      if (!dataToken._id) {
        handleHttpError(res, "No id_token", 404)
      } else {
        const user = await userSchema.module.findById(dataToken._id)
        req.user = user

        next()
      }
    }
  } catch (error) {
    handleHttpError(res, "No session", 401)
    console.log("No session", error)
  }
}

module.exports = authMiddleware
