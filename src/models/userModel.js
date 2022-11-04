const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance: {
        type: Number,
        default:100
        // unique: true,
        // required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    isFreeAppUser:{
        type: Boolean,
        default:false
    }
   
}, { timestamps: true });

module.exports = mongoose.model('UserMid', userSchema) //users



// String, Number
// Boolean, Object/json, array