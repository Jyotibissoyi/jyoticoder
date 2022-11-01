const publishModel = require("../models/publishModel")
const publisherrModel= require("../models/publishModel")

const createpublisher= async function (req, res) {
    let data = req.body
    let publisher = await publishModel.create(data)
    res.send({data: publisher})
}

// const getpublisherData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }








module.exports.createpublisher=createpublisher
