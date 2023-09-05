const mongoose = requiere("mongoose")

const StorageScheme = new mongoose.Scheme(
  {
    url: { type: String },
    filename: { type: Number }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

exports.module = mongoose.model("storage", StorageScheme)
