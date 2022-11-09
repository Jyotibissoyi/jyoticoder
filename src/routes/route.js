const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/OrderController")
const productController=require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createOrder",commonMW.myMidd1 ,OrderController.createOrder )
router.post("/createproduct", productController.createProduct )
router.post("/createuser", commonMW.myMidd1,UserController.createuser)

module.exports = router;