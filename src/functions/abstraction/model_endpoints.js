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



module.exports={listEndPoint};
