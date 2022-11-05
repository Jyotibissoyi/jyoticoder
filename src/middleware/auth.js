const jwt = require("jsonwebtoken");

const tokenValidate = function (req, res, next) {
  let Token = req.headers["x-auth-token"]
  if (!Token) {
    return res.send({ msg: "token required" })
  }
  let decodToken = jwt.verify(Token, "BABES")
  //console.log(decodToken)
  if (!decodToken) {
    return res.send({ msg: "invalid token" })
  }
  next()
}

const userVerify = function (req, res, next) {
  const userId = req.params.userId
  let Token = req.headers["x-auth-token"]
  let decodToken = jwt.verify(Token, "BABES")
  if (userId !== decodToken.userId) {
    return res.send({ msg: "access denied" })
  }
  next()
}



//const middleware=[tokenValidate, tokenVerify]


module.exports.tokenVerify=userVerify
module.exports.tokenValidate = tokenValidate
//module.exports.middleware=middleware