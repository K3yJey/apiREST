const mongoose = requiere("mongoose")

const UserScheme = new mongoose.Scheme(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: ["user", "admin"], default: user }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

exports.module = mongoose.model("user", UserScheme)
