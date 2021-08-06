const mongoose = require('mongoose');


/*
const {schemaDeleteCascades} = require(
	"../functions/schemaGenerator.js");
*/






const orderSchema = new mongoose.Schema(
{
	//product_id:foreignKeySchemaType(Product), 
	amount: { 
		type: Number,
		min: [.01, "No product should have a price less than .01"], 
		max: 1000000,
		"required":true
	},
	cost: {
		"type":Number,
		"immutable":true
	},
});





var productSchema = new mongoose.Schema(
{
	name:{
		"type":String,
		"minLength": 3,
		"maxLength":200,
		"required":true
	}, 
	price: { 
		type: Number,
		min: [.01, "No product should have a price less than .01"], 
		max: 1000000,
		"required":true
	},
	description: {
		"type":String,
		"minLength": 5,
		"maxLength":1000,
		"required":true
	},
	orders:{
		"type":orderSchema,
		"required":false
	}, 
});





/*

productSchema.pre('deleteOne', 
	{ document: false, query: true }, async function() {
  const doc = await this.model.findOne(this.getFilter());
  await UserLink.deleteMany({ user: doc._id });
});
*/






const Product = mongoose.model('Product', productSchema);








module.exports={Product};
