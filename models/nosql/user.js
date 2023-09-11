const mongoose = require("mongoose")
const moongoseDelete = require("mongoose-delete")

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String, select: false }, //select: false - Para que no se muestre cuando se consulta
    role: { type: ["user", "admin"], default: "user" }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

userSchema.plugin(moongoseDelete, { overrideMethods: "all" }) //Sobreescribir métodos nativos de mongoose
exports.module = mongoose.model("user", userSchema)
