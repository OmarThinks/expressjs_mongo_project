const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	name:{
		"type":String,
		"minLength": 3,
		"maxLength":200
	}, 
	price: { 
		type: Number,
		min: [.01, "No product should have a price less than .01"], 
		max: 1000000 
	},
	description: {
		"type":String,
		"minLength": 150,
		"maxLength":1000
	},
});


const Product = mongoose.model('Product', productSchema);


module.exports={Product};
