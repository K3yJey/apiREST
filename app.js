import express from "express"
import cors from "cors"

require("dotenv").config()
const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`El app está lista por http://localhost:${port}`)
})
