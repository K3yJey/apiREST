const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage` //ruta de storage
    cb(null, pathStorage)
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop() //Extraer la extensión del archivo
    const filename = `file-${Date.now()}.${ext}` //Guarda el archivo con el prefijo "file" + "fecha actual" + "extensión"
    cb(null, filename)
  }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware
