const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "2h"
    }
  )
  return sign
}

const verifySign = async (tokenJWT) => {
  try {
    return jwt.verify(tokenJWT, JWT_SECRET)
  } catch (error) {
    return null
  }
}

module.exports = { tokenSign, verifySign }
