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
	model.findById(id, function (err, doc) {
		if (err) {return false;}
		else
		{
			if (doc)
			{return doc;}
			else{false;}	
		}
	});
}



module.exports={"validateObjectIdExists":validateObjectIdExists};
