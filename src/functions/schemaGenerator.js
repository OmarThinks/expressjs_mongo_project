/*










*/



/*
function schemaDeleteCascades(schema, childModels, fieldNames)
{

	schema.pre('deleteOne', { document: false, query: true }, 
		async function() {
	  	const doc = await this.model.findOne(this.getFilter());
	  await UserLink.deleteMany({ user: doc._id });
	});


	schema.pre('remove', function(next) {
    	
    	subModels.forEach((childModel, index) => 
    		{
    			let fieldName = fieldNames[index];
    			childModel.remove({fieldName: this._id}).exec();
    		});
    	next();
	});
	return schema;
}
*/






function schemaDeleteCascades(schema, fieldName)
{
	schema.pre('deleteOne', { document: false, query: true }, 
		async function() {
	  	const doc = await this.model.findOne(this.getFilter());
	  await UserLink.deleteMany({ fieldName: doc._id });
	});
	return schema;
}



module.exports={"schemaDeleteCascades":schemaDeleteCascades};
