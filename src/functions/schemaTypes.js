const mongoose = require('mongoose');
const {foreingKeyValidator} =  require("./validators.js");



function foreignKeySchemaType(model, required=true, immutable=true)
{
	//console.log(model);
	let modelName = model.$__collection.modelName;
	return {
		"type":mongoose.ObjectId,
		"required":required,
		"immutable":immutable,
		"validate": [foreingKeyValidator(model),
		"There is no " + modelName + " with this id"]
	}
}



module.exports={"foreignKeySchemaType":foreignKeySchemaType};
