handleHttpError = (res, message = "Error", code = 403) => {
  res.status(code)
  res.send({ err: message })
}

module.exports = { handleHttpError }
