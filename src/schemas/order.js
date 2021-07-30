const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
{
	product_id:{
		"type":mongoose.ObjectId,
		"required":true,
		"immutable":true
	}, 
	amount: { 
		type: Number,
		min: [1, "No product should have a price less than .01"], 
		max: 1000000,
		"required":true
	},
	cost: {
		"type":Number,
		"immutable":true
	},
});

module.exports={orderSchema};
