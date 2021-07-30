const mongoose = require('mongoose');

const {Product} = require("./product.js");

const {validateObjectIdExists} =  require("../functions/validators.js");
const {foreignKeySchemaType} =  require("../functions/schemaTypes.js");



























const orderSchema = new mongoose.Schema(
{
	product_id:foreignKeySchemaType(Product), 
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


const Order = mongoose.model('Order', orderSchema);





module.exports={Order};
