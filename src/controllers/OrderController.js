const { count } = require("console");
const moment = require("moment/moment");
const orderModel = require("../models/OrderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const getOrderData = async function (req, res) {
    let allBooks = await BookModel.find({ authorName: "HO" })
    console.log(allBooks)
    if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
    else res.send({ msg: "No books found", condition: false })
}


const updateBooks = async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks = await BookModel.findOneAndUpdate(
        { authorName: "ABC" }, //condition
        { $set: data }, //update in data
        { new: true, upsert: true },// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
    )

    res.send({ msg: allBooks })
}

const deleteBooks = async function (req, res) {
    // let data = req.body 
    let allBooks = await BookModel.updateMany(
        { authorName: "FI" }, //condition
        { $set: { isDeleted: true } }, //update in data
        { new: true },
    )

    res.send({ msg: allBooks })
}



const totalSalesPerAuthor = async function (req, res) {
    // let data = req.body 
    let allAuthorSales = await BookModel.aggregate(
        [
            { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
            { $sort: { totalNumberOfSales: -1 } }
        ]
    )

    res.send({ msg: allAuthorSales })
}

// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
// const a= async function(req, res){
// let data= req.body
// let userId=data.userId
// let producId=data.producId

// let checkUrData= await 


// }



//                      😎😎 ASSIGNMENT 😎😎



const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId

    let checkUrData = await userModel.findById(userId)
    let checkPrData = await productModel.findById(productId)
    if (!userId) {
        return res.send("userid and productId required")
    }
    if (!productId) {
        return res.send("productid is required")
    }
    if (!checkUrData || !checkPrData) {
        return res.send("invalid and checkPrData userid")
    }
    // if (!checkPrData) {
    //     return res.send("invalid productid")
    // }
    let isFreeAppUser = req.headers["isfreeappuser"];
    if (isFreeAppUser == "false") {
        let userBalance = checkUrData.balance;
        let productPrice = checkPrData.price;
        if (userBalance >= productPrice) {
            let newbalance = userBalance - productPrice;
            await userModel.findOneAndUpdate(
                { _id: userId },
                { $set: { balance: newbalance } }
            );
            let todayDate = moment().format("DD-MM-YYYY")
            data.amount = newbalance;
            data.date = todayDate;
            let savedData = await orderModel.create(data)
            return res.send({ orderplaced: savedData })
        } else {
            return res.send("you dont have enough money");
        }
    } else if (isFreeAppUser == "true") {
        let today = moment().format("DD-MM-YYYY")
        data["amount"] = 0;
        data["isFreeAppUser"] = true;
        let savedData = await orderModel.create(data);
        return res.send({ orderplaced: savedData });
    }

    let Orderdata = await orderModel.create(data)

    res.send({ msg: Orderdata })
}




module.exports.createOrder = createOrder