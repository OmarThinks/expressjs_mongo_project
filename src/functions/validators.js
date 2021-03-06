/*
This function tells if the object with the id exists:

Inputs:
- model:  example: Product
- id: example: 1234sdfajhsdaj

Output:
- false (boolean), there is not object with this id
- the instance of the object (if it exists)

*/


async function validateObjectIdExists(model, id)
{
	//console.log("I am validateObjectIdExists");
	return await model.findById(id, async function (err, doc) 
	{
		if (err) {
			//console.log("there is an error");
			return false;}
		else
		{
			//console.log("There are no errors in validateObjectIdExists");
			if (doc)
			{
				//console.log(doc);
				return doc;
				//console.log("doc is returned");
			}
			else{return false;}	
		}
	})
	.catch((err)=>{return false;});
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
