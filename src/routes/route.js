const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/createBook", UserController.createBook )

router.get("/getBook", UserController.getBook)

// router.post("/createUser", async function(req, res) {
//   let data = req.body
//   let savedData = await userModel.create(data)
// res.send({msg: savedData})
// console.log(savedData)
// })


module.exports = router;