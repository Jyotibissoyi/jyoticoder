const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/OrderController")
const productController=require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createOrder",commonMW.myMidd1 ,OrderController.createOrder )
router.post("/createproduct", productController.createProduct )
router.post("/createuser", commonMW.myMidd1,UserController.createuser)
// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;