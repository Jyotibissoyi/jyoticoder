const mongoose = require('mongoose');
const objectID=mongoose.Schema.Types.Mixed;

const bookSchema = new mongoose.Schema( {
    amount: Number,
	isFreeAppUser: Boolean, 
	date: String,
    userId: {
        type: objectID,
        ref:"UserMid"
    },
    productId: {
        type:objectID,
        ref:"ProductMid"
    }
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")



}, { timestamps: true });

module.exports = mongoose.model('OrderMid', bookSchema) //users
