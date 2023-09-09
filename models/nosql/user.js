const mongoose = require("mongoose")
const moongoseDelete = require("mongoose-delete")

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: ["user", "admin"], default: "user" }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

UserSchema.plugin(moongoseDelete, { overrideMethods: "all" }) //Sobreescribir métodos nativos de mongoose
exports.module = mongoose.model("user", UserSchema)
