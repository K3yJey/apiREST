const mongoose = require("mongoose")
const moongoseDelete = require("mongoose-delete")

const storageSchema = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: String }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

storageSchema.plugin(moongoseDelete, { overrideMethods: "all" }) //Sobreescribir métodos nativos de mongoose
exports.module = mongoose.model("storage", storageSchema)
