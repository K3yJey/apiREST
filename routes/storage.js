const express = require("express")
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const {
  createItem,
  getItems,
  getItem,
  updateItem,
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
router.get("/:id", getItem)

/**
 * Actualizar un registro || PUT
 */
router.put("/:id", updateItem)

/**
 * Eliminar un registro || DELETE
 */
router.delete("/:id", deleteItem)

module.exports = router
