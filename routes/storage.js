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

/**
 * Crear un registro || GET
 */
//"single" para mandar un solo archivo - "multi" para mandar varios archivos
router.post("/", uploadMiddleware.single("myfile"), createItem)

/**
 * Listar registros || POST
 */
router.get("/", getItems)

/**
 * Listar un registro || POST
 */
router.get("/:id", validatorGetItem, getItem)

/**
 * Eliminar un registro || DELETE
 */
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router
