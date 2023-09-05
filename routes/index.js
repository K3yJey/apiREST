const express = require("express")
const fs = require("fs")
const router = express.Router()

const PATH_ROUTES = __dirname //dirname obtiene la ruta actual

const removeExtension = (fileName) => {
  return fileName.split(".").shift() //Separa el array: "Track" . "js" y selecciona el primer valor
}

//router.use("/track", require("./track.js"))

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file)

  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`)) //htpp://localhost:3001/api/track
  }
})

module.exports = router
