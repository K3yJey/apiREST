const mongoose = require("mongoose")

const storageSchema = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: Number }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

exports.module = mongoose.model("storage", storageSchema)
