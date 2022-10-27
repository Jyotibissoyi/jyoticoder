const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUser= async function (req, res) {
    let data= req.body.authorID
    let allUsers= await UserModel.find({authorID:data})
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUser= getUser