const bcryptjs = require("bcryptjs")

const encrypt = async (passwordPlain) => {
  //bcryptjs.hash() recibe el string a encriptar y el nivel de encriptación (1-99)
  const hash = await bcryptjs.hash(passwordPlain, 10)
  return hash
}

const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }
