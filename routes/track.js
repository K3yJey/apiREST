const express = require("express")
const router = express.Router()
const { validatorCreateItem, validatorGetItem } = require("../validators/track")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require("../controllers/track")

// Crear un registro || GET
router.post("/", validatorCreateItem, createItem)

// Listar registros || POST
router.get("/", authMiddleware, checkRol(["admin"]), getItems) //Solo el user:admin puede listar tracks

// Listar un registro || POST
router.get("/:id", validatorGetItem, getItem)

// Actualizar un registro || PUT
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)

// Eliminar un registro || DELETE
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router
