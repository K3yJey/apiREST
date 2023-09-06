const { validationResult } = require("express-validator")

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw() //Valida el req, si falla entonces pasa al catch
    return next() //Sin errores, pasa la data al controller
  } catch (err) {
    res.status(403)
    res.send({ error: err.array() })
  }
}

module.exports = validateResult
