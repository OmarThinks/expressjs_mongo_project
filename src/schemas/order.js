const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
{
	product:{
		"type":mongoose.ObjectId,
		"required":true
	}, 
	amount: { 
		type: Number,
		min: [1, "No product should have a price less than .01"], 
		max: 1000000,
		"required":true
	},
	cost: {
		"type":number
	},
});

module.exports={productSchema};
