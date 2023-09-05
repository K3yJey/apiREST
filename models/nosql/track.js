const mongoose = require("mongoose")

const trackSchema = new mongoose.Schema(
  {
    name: { type: String },
    album: { type: String },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true
        },
        message: "Error_URL"
      }
    },
    artist: {
      name: { type: String },
      nickname: { type: String },
      nationality: { type: String }
    },
    duration: { start: { type: String }, end: { type: String } },
    mediaId: { type: mongoose.Types.ObjectId }
  },
  {
    timestamps: true, //Columna de fecha de creación y actualización
    versionKey: false
  }
)

exports.module = mongoose.model("track", trackSchema)
