const mongoose = require("mongoose")

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI

    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Conexión correcta")
  } catch (err) {
    console.log("Conexión incorrecta\n", err)
  }
}

module.exports = dbConnect
