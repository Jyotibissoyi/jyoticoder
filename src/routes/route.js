const express = require('express');
const router = express.Router();
const cowinController= require("../controllers/cowinController")
const dataController= require("../controllers/dataController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", cowinController.getStates)
router.get("/cowin/districtsInState/:stateId", cowinController.getDistricts)
router.get("/cowin/getByPin", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/getByDistrictId", cowinController.getByDistrictId);

router.get("/weather/london", dataController.getLondonWeather);

router.get("/weather/london/temperature", dataController.getLondonTemperature);

router.get("/getSelectedCities", dataController.getSelectedCities);


router.post("/meme", dataController.meme);



// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;