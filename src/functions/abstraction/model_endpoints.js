const {mongoose_errors_to_json} = 
	require("../error_handlers/error_to_json.js");




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
	function endPointToReturn(req,res)
	{
		const new_doc = new model(req.body);
		
		new_doc.save(function (err, new_doc) {
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



function detailsEndPoint(model, model_name){
	function endPointToReturn (req,res){

	let document_id = req.params.id;
	
	model.findById(document_id, function (err, doc) {
		if (err) 
		{
			res.statusCode = 404;
			res.send({"_id":"there is no "+model_name+" with this _id"});
		}
		else
		{
			if (doc)
			{
				//console.log(doc);
				res.send(doc);
			}
			else
			{
				res.statusCode = 404;
				res.send({"_id":"there is no "+model_name+" with this _id"});
			}	
		}
	});
	}
	return endPointToReturn;
}

function updateEndPoint(model, model_name){
	function endPointToReturn (req,res){

		let doc_id = req.params.id;

		model.findByIdAndUpdate(doc_id, req.body, 
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
					res.send({"_id":"there is no "+model_name+
						" with this _id"});
				}			
			}
		});
	}
	return endPointToReturn;
}

function deleteEndPoint(model, model_name){
	function endPointToReturn (req,res){


	let doc_id = req.params.id;
	//console.log("I search this id");

	model.findByIdAndDelete(doc_id, function (err, doc) {
		if (err) 
		{
			res.statusCode = 404;
			res.send({"_id":"there is no "+model_name+
				" with this _id"});
			//console.log("I did not find this id");
		}
		else
		{
			if (doc)
			{res.send({"success":true,
				"message":model_name +" deleted successfully"});}
			else
			{
				res.statusCode = 404;
				res.send({"_id":"there is no "+ model_name+
					" with this _id"});
			}			
		}
	});
	}
	return endPointToReturn;
}





module.exports={listEndPoint, createEndPoint, 
	detailsEndPoint, updateEndPoint, deleteEndPoint};
