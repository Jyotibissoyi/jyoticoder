const express = require('express');
const router = express.Router();







//////


let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]



router.post("/solve", function (req, res) {
    let voteAge = req.query // {age : 18}
    let reqAge = voteAge.age
    let VoteAge1 = []
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= reqAge) {
            VoteAge1.push(persons[i])
            persons[i].votingStatus = true;
        }

    }

    res.send({ data: VoteAge1 })



})


module.exports = router;