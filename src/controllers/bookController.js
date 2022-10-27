const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//2
const getBook= async function (req, res) {
   let savedData= await BookModel.find({authorID})
   res.send({msg: savedData})
}
// 3
const authorsBook= async function (req, res) {
   

   let savedData= await BookModel.find({authorID :1})
   res.send({msg: savedData})
}
//4
const updateBookPrice = async function (req, res) {
   let data = req.body.price
   let allBooks= await BookModel.findOneAndUpdate( 
      { bookName : "Two states"} , 
      {authorID: 1},
      { $set: data }
   )
   
    
    res.send( { msg: allBooks})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorID : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
   let data = req.body // {sales: "1200"}
   // let allBooks= await BookModel.updateMany( 
   //     { author: "SK"} , //condition
   //     { $set: data } //update in data
   //  )
   let allBooks= await BookModel.findOneAndUpdate( 
       { authorName: "ABC"} , //condition
       { $set: data }, //update in data
       { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
    )
    
    res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


module.exports.getBook=getBook
module.exports. authorsBook= authorsBook
module.exports.updateBookPrice=updateBookPrice



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
