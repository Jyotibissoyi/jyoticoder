const jwt=require("jsonwebtoken");

const tokenValidate=  function(req,res,next){
 let checkToken=req.headers["x-auth-token"]
  if(!checkToken){
    return res.send({msg: "token required"})
  }
 let decodToken= jwt.verify(checkToken, "BABES")
if(!decodToken){
    return res.send({msg: "invalid token"})
}
 next()
}





module.exports.tokenValidate=tokenValidate