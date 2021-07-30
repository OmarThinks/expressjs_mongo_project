const {mongoose_errors_to_json} = 
	require("../error_handlers/error_to_json.js");

const {validateObjectIdExists} = 
	require("../validators.js");




function listEndPoint(model)
{
	function endPointToReturn(req,res)
	{
		model.find({}, function(err, documents) 
		{
		    var docMap = {};

		    documents.forEach(function(doc) 
		    {
		      docMap[doc._id] = doc;
		    });

		    res.send(docMap);  
		});
	}

	return endPointToReturn;
}






function createEndPoint(model){
	async function endPointToReturn(req,res)
	{
		const new_doc = new model(req.body);
		
		await new_doc.save(function (err, new_doc) {
		if (err) {
			res.statusCode = 400;
			res.send(mongoose_errors_to_json(err));
		}
		else
		{
			//console.log(new_doc);
			res.send(new_doc);
		}
		});
	}
	return endPointToReturn;
}





function detailsEndPoint(model){
	async function endPointToReturn (req,res){
		let document_id = req.params.id;
		//console.log(document_id);
		let modelName = model.$__collection.modelName;
		//console.log(modelName);
		let doc = await validateObjectIdExists(model, document_id);
		//console.log(doc);
		//console.log(doc.mongooseCollection.collection);
		//console.log(doc.schema.paths);
		if (doc){
			console.log("I found it");
			res.send(doc);}
		else{
			res.statusCode = 404;
			res.send({"_id":"there is no "+modelName+" with this _id"});
		}
	}
	return endPointToReturn;
}

function updateEndPoint(model){
	async function endPointToReturn (req,res){
		let document_id = req.params.id;
		let modelName = model.$__collection.modelName;
		model.findByIdAndUpdate(document_id, req.body, 
			{"useFindAndModify":false, "new":true,
			"runValidators": true},function (err, doc) 
			{
				if (err) 
				{
					res.statusCode = 400;
					res.send(mongoose_errors_to_json(err));
				}
				else
				{
					if (doc)
					{res.send(doc);}
					else
					{
						res.statusCode = 404;
						res.send({"_id":"there is no "+modelName+
							" with this _id"});
					}			
				}
			});
	}
	return endPointToReturn;
}


function deleteEndPoint(model){
	async function endPointToReturn (req,res){
		let document_id = req.params.id;
		let modelName = model.$__collection.modelName;
		doc = await validateObjectIdExists(model, document_id);
		if (doc){
			await doc.remove();
			res.send({"success":true,
				"message":modelName +" deleted successfully"});
		}
		else{
			res.statusCode = 404;
			res.send({"_id":"there is no "+modelName+" with this _id"});
		}
	}
	return endPointToReturn;
}



module.exports={listEndPoint, createEndPoint, 
	detailsEndPoint, updateEndPoint, deleteEndPoint};
