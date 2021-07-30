/*
This function tells if the object with the id exists:

Inputs:
- model:  example: Product
- id: example: 1234sdfajhsdaj

Output:
- false (boolean), there is not object with this id
- the instance of the object (if it exists)

*/


function validateObjectIdExists(model, id)
{
	//console.log("I am validateObjectIdExists");
	return model.findById(id, function (err, doc) {
		if (err) {return false;}
		else
		{
			//console.log("There are no errors in validateObjectIdExists");
			if (doc)
			{
				//console.log(doc);
				return doc;
				//console.log("doc is returned");
			}
			else{false;}	
		}
	});
}




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



module.exports={"validateObjectIdExists":validateObjectIdExists,
	"foreingKeyValidator":foreingKeyValidator};
