const mongoose = require('mongoose');

const {Product} = require("./product.js");

const {validateObjectIdExists} =  require("../functions/validators.js");

function foreingKeyValidator(model){
	return async function id_validator (val) {
	  	console.log(val);
		doc = await validateObjectIdExists(model, val);
		if (doc) {console.log(doc);
				return true;}
		else{console.log(false);
				return false;}
		/*await validateObjectIdExists(model, val).
		then((doc)=>{
			if (doc) {
				console.log(doc);
				return true;
			}else{
				console.log(false);
				return false;
			}
		});*/
	}
}


async function myFunction(val){
	async function myInnerFunction(){
		let x = await 7;
		return false;
	}
	return await myInnerFunction;
}



function myFunction2 (v) {
    return async function (val) {
       return await false;
    }
}



//console.log(await foreingKeyValidator(Product)("60fa57b72d712b2ec8d192ef"));


const orderSchema = new mongoose.Schema(
{
	product_id:{
		"type":mongoose.ObjectId,
		"required":true,
		"immutable":true,
		"validate": foreingKeyValidator(Product)
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


const Order = mongoose.model('Order', orderSchema);





module.exports={Order};
