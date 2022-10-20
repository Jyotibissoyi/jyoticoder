const { application } = require('express');
const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


//1
router.get("/sol1", function(req, res) {
let arr=[1, 2, 3, 5, 6, 7] //here 4 is missing
let a = arr.length+1;
sum2= a*(a+1)/2;
let sum1= 0
for (let i = 0; i < arr.length; i++) {
    sum1= sum1+arr[i];
}
let missingNumber=(sum1-sum2);
      res.send({missingNumber});
});


//2
router.get("/sol2", function(req, res) {
    let arr=[33, 34, 35,36, 37, 38] // here 32 is missing
    let n = arr.length=1;
    sum2= n*(n+1)/2;
    let sum1= 0
    for (let i = 0; i < arr.length; i++) {
        sum1= sum1+arr[i];
    }
    let missingNumber=(sum1-sum2);
          res.send({missingNumber});
    });
/////////////////////////////////

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   router.post('/players', function (req, res) {
 
    //LOGIC WILL COME HERE
const body = req.body
  const player = players.find(x=> x.name ===body.name) 
 // let player = body.name;
   if(player){
    res.send({massage: "player already exist"})
   }
   else {
    players.push(body)
    res.send(players)
   }
  console.log(players)  
    
})


 



module.exports = router;
