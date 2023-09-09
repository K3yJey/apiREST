const { storageModel } = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL

/**
 * Crear un registro
 */
const createItem = async (req, res) => {
  try {
    const { body, file } = req
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.module.create(fileData)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en createStorage")
    console.log("Error en createStorage: ", error)
  }
}

/**
 * Listar registros
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.module.find({})
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en createStorage")
    console.log("Error en createStorage", error)
  }
}

/**
 * Listar un registro
 */
const getItem = (req, res) => {}

/**
 * Actualizar un registro
 */
const updateItem = (req, res) => {}

/**
 * Eliminar un registro
 */
const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
