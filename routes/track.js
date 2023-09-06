const express = require("express")
const router = express.Router()
const { validatorCreateItem } = require("../validators/track")
const { getItems, getItem, createItem } = require("../controllers/track")

//http://localhost/track GET, POST, DELETE, PUT

router.get("/", getItems)
router.post("/", validatorCreateItem, createItem)

module.exports = router
