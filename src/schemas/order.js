const mongoose = require('mongoose');

const {Product} = require("./product.js");

const {validateObjectIdExists} =  require("../functions/validators.js");



function foreingKeyValidator(model){
	return async function id_validator (val) {
	  	//console.log(val);
		doc = await validateObjectIdExists(model, val);
		if (doc) 
		{
			//console.log(doc);
			return true;
		}
		else
		{
			//console.log(false);
			return false;
		}
	}
}





function foreignKeySchemaType(model, required=true, immutable=true)
{	console.log(model);
	/*for (var name in model.models[0].name) {
  		console.log(name, model[name]);
	}*/
	//console.log();
	let modelName = model.$__collection.modelName;
	return {
		"type":mongoose.ObjectId,
		"required":required,
		"immutable":immutable,
		"validate": [foreingKeyValidator(model),
		"There is no " + modelName + " with this id"]
	}
}

























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
