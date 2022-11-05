const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile:  String,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    age: Number

///////
//     "createdAt" : ISODate("2022-03-08T05:04:18.737Z"),
//     "updatedAt" : ISODate("2022-03-08T05:04:18.737Z"),
//     "__v" : 0


}, { timestamps: true });

module.exports = mongoose.model('USERauth', userSchema)
