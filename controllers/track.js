const { trackModel } = require("../models")

/**
 * Obtener lista de base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await trackModel.module.find({})
  res.send({ data })
  console.log(`Listar datos: ${data}`)
}

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {}

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  //const body = req.body Destructuramos
  const { body } = req
  console.log(body)
  
  const data = await trackModel.module.create(body)
  res.send({ data })
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
