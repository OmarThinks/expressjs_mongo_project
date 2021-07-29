function mongoose_errors_to_json(raised_err)
{
	console.log(raised_err);
	console.log(JSON.stringify(raised_err));
	let errors = raised_err.errors;
	console.log(errors);
	
	let errors_json = {};
	for (const err in errors) {
  		errors_json[err] = errors[err].message;
	}
	if (Reflect.ownKeys(errors_json).length!=0) {return errors_json;}
	return {"success":false,"message":raised_err["message"]}
}


module.exports={mongoose_errors_to_json};

