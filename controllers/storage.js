const fs = require("fs")
const { matchedData } = require("express-validator")
const { storageModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

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
    handleHttpError(res, "Error en getItems")
    console.log("Error en getItems", error)
  }
}

/**
 * Listar un registro
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storageModel.module.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en getItem")
    console.log("Error en getItem", error)
  }
}

/**
 * Eliminar un registro
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const dataFile = await storageModel.module.findById(id)
    const { filename } = dataFile
    const filePath = `${MEDIA_PATH}/${filename}`

    //Soft delete
    const filter = { _id: id } // Filtra el id coincidente
    await storageModel.module.delete(filter)

    //fs.unlinkSync(filePath) //Elimina el archivo físico que se encuentra en la ruta /storage y coincide con el id

    const data = {
      filePath,
      deleted: 1
    }

    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en deleteItem")
    console.log("Error en deleteItem", error)
  }
}

module.exports = { createItem, getItems, getItem, deleteItem }
