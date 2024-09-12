const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (cb) {
    const pathStorage = `${__dirname}/../storage` //ruta de storage
    cb(null, pathStorage)
  },
  filename: function (file, cb) {
    const ext = file.originalname.split(".").pop() //extraer la extensión del archivo
    const filename = `file-${Date.now()}.${ext}` //guarda el archivo con el prefijo "file" + "fecha actual" + "extensión"
    cb(null, filename)
  }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware
