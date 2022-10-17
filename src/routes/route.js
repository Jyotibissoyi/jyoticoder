const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;
//1
 router.get('/movies', function(req, res) {
    let movies = ['After', 'Kung fu panda', 'Holydate' ]
    console.log("my movies collection")
    res.send(movies)
    
 })
//  //2
//  router.get('/movies/:indexNum', function(req, res) {
//      let movies = ['After', 'Kung fu panda', 'Holydate' ];
//         let a= req.params
    
//      res.send(movies[a.indexNum])
//   })
 //3
//  router.get('/movies/:indexNum', function(req, res) {
//     let movies = ['After', 'Kung fu panda', 'Holydate' ];
//     let a= req.params
//     let b= a.indexNum
//     if (b<movies.length) {
//       res.send(movies[a.indexNum])  
//     }
//     else {
//       res.send("enter a valid number") 
// }

// })
// //4
// router.get('/films', function(req, res) {
//     let films= [ {
//        'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//        'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
//        res.send(films)
    
//  })

//5

// router.get('/film/:filmId', function(req, res) {
//     let film= [ {
//        'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//        'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
//        let a= req.params
//        let b= a.filmId
//         for (let i = 0; i <film.length; i++) {
//          if (b==film[i].id) {
//             res.send(film[i])
//          } 
//         }
//          for (let i = 0; i < film.length; i++) {
//             if (b!==film[i].id) {
//                res.send("not exist")
//             } 
            
//          }
// })