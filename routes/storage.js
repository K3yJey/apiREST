const express = require("express")
const router = express.Router()
const { validatorGetItem } = require("../validators/storage")
const uploadMiddleware = require("../utils/handleStorage")
const {
  createItem,
  getItems,
  getItem,
  deleteItem
} = require("../controllers/storage")

//http://localhost/storage GET, POST, DELETE, PUT

//"single" para mandar un solo archivo - "multi" para mandar varios archivos
router.post("/", uploadMiddleware.single("myfile"), createItem)

router.get("/", getItems)

router.get("/:id", validatorGetItem, getItem)

router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router
