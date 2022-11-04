const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    Name: String,
    category: String,
    price:{
        type: Number,
        require:true
    }


	// name:"Catcher in the Rye",
	// category:"book",
	// price:70 //mandatory property

}, { timestamps: true });

module.exports = mongoose.model('ProductMid', authorSchema)
