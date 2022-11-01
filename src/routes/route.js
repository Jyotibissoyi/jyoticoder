const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController");
const publishController=require("../controllers/publishController")
const { createpublisher } = require('../controllers/publishController');

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/createpublisher", publishController.createpublisher )

router.post("/checkingID", bookController.checkingID )
router.post("/updatPrice", bookController.updatPrice)



router.post("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;