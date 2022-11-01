const bookModel= require("../models/bookModel")
const publisherrModel= require("../models/publishModel")
const authorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
        let specificBook = await bookModel.find().populate('Author(reff,populate)')
    res.send({data: specificBook})

}
//a
const checkingID= async function (req, res) {
    let {author,publisher}=req.body
    if(!author){
        res.send("requir author id")
    }
    if(!publisher){
        res.send("requir publisher id")
    }
    let authorData=await authorModel.findById({_id:author})
    if(!authorData){
        res.send("author not avalable")
    }
    let publisherData=await publishermodel.findById({_id:publisher})
    if(!publisherData){
        res.send("Publisher not avalable")
    }
    console.log(authorName)
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
//b
const BooksWithAuthorDetails= async function (req, res) {
    let data = await bookModel.find().populate("publisherID").populate("AuthorID")

    res.send(data)
}
// c
const BookWriteBy= async function(req, res){
    let key=await publishermodel.find({name:["Penguin","Gorilla"]}).select({_id:1});
    let key1=await bookModel.find({publisher:key}).select({_id:1});
    for (let index = 0; index < key1.length; index++) {
        const element = key1[index];
        let key001=await bookModel.findByIdAndUpdate(element,{$set:{isHardCover:true}})

        console.log(key001)
    }

}
const updatPrice=async function(req, res){

    let key = await authorModel.find({ rating:{$gte:2}}).select({_id:1});
    let books=await bookModel.find({author:key}).select({_id:1})
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        let update= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}})
        console.log(update)
        
    }

}

module.exports. checkingID= checkingID
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = BooksWithAuthorDetails
module.exports. updatPrice= updatPrice
module.exports.BookWriteBy=BookWriteBy
