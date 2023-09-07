const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key
    if (apiKey === "Kevin") {
      next()
    } else {
      res.status(403)
      res.send("ApiKey no es correcta")
    }
  } catch (err) {
    res.status(403)
    res.send("Problema en customHeader")
  }
}

module.exports = customHeader
