const express = require("express")
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const { createItem } = require("../controllers/storage")

//http://localhost/storage GET, POST, DELETE, PUT

//"single" para mandar un solo archivo - "multi" para mandar varios archivos
router.post("/", uploadMiddleware.single("myfile"), createItem)

module.exports = router
