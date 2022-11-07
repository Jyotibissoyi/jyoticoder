const jwt = require("jsonwebtoken");

const tokenValidate = function (req, res, next) {
  try{let Token = req.headers["x-auth-token"]
  if (!Token) {
    return res.status(400).send({ msg: "token required" })
  }
  let decodToken = jwt.verify(Token, "BABES")
  //console.log(decodToken)
  if (!decodToken) {
    return res.status(401).send({ msg: "invalid token" })
  }
  next()}
  catch (error) {
    res.status(500).send({ msg: error })
  }
}

const userVerify = function (req, res, next) {
   try {const userId = req.params.userId
  let Token = req.headers["x-auth-token"]
  let decodToken = jwt.verify(Token, "BABES")
  if (userId !== decodToken.userId) {
    return res.status(403).send({ msg: "access denied" })
  }
  next()}
  catch (error) {
    res.status(500).send({ msg: error })
  }
}



//const middleware=[tokenValidate, tokenVerify]


module.exports.tokenVerify=userVerify
module.exports.tokenValidate = tokenValidate
//module.exports.middleware=middleware