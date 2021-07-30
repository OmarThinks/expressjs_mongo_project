const mongoose = require('mongoose');


function product_id_validator (val) {
  console.log(val);
  return true;
}






const orderSchema = new mongoose.Schema(
{
	product_id:{
		"type":mongoose.ObjectId,
		"required":true,
		"immutable":true,
		"validate":product_id_validator
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
