const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const midd=require("../middleware/auth");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

//The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)


router.post("/createFbUser", userController.createFbUser)
router.post("/loginFb", userController.loginFb)
router.get("/getFbUser/:userId",midd.tokenValidate,userController.getFbUser)
router.put("/putFbUser/:userId",midd.tokenValidate,userController.putFbUser)
router.delete("/deleteFbUser/:userId",midd.tokenValidate,userController.deleteFbUser)

module.exports = router;