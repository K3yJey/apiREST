const { matchedData } = require("express-validator")
const { trackModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

// Crear un registro
const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await trackModel.module.create(body)

    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en createItem")
    console.log("Error en createItem", error)
  }
}

// Listar registros
const getItems = async (req, res) => {
  try {
    const data = await trackModel.module.find({})
    const user = req.user
    res.send({ data, user })
  } catch (error) {
    handleHttpError(res, "Error en getItems")
    console.log("Error en getItems", error)
  }
}

// Listar un registro

const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await trackModel.module.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en getItem")
    console.log("Error en getItem", error)
  }
}

// Actualizar un registro
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    const filter = { _id: id } // Filtra el id coincidente
    const data = await trackModel.module.findOneAndUpdate(filter, body) // Utiliza el filtro para buscar

    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en updateItem")
    console.log("Error en updateItem", error)
  }
}

// Eliminar un registro
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const filter = { _id: id } // Filtra el id coincidente
    const data = await trackModel.module.delete(filter)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en deleteItem")
    console.log("Error en deleteItem", error)
  }
}

module.exports = { createItem, getItems, getItem, updateItem, deleteItem }
