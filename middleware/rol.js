const { handleHttpError } = require("../utils/handleError")

const checkRol = (role) => (req, res, next) => {
  try {
    const { user } = req
    const roleByUser = user.role
    //Si roleByUser existe dentro de roleSingle devuelve un TRU en rol.some
    const checkValueRole = role.some((roleSingle) => roleByUser.includes(roleSingle))

    if (!checkValueRole) {
      handleHttpError(res, "El usuario no tiene permisos")
    } else {
      next()
    }
  } catch (error) {
    handleHttpError(res, "Error en checkRol", 403)
    console.log("Error en checkRol", error)
  }
}

module.exports = checkRol
