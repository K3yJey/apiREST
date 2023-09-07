const express = require("express")
const router = express.Router()
const { validatorCreateItem, validatorGetItem } = require("../validators/track")
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require("../controllers/track")

/**
 * Crear un registro || GET
 */
router.post("/", validatorCreateItem, createItem)

/**
 * Listar registros || POST
 */
router.get("/", getItems)

/**
 * Listar un registro || POST
 */
router.get("/:id", validatorGetItem, getItem)

/**
 * Actualizar un registro || PUT
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)

/**
 * Eliminar un registro || DELETE
 */
router.delete("/:id", deleteItem)

module.exports = router
