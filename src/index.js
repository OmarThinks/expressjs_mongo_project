const express = require('express');
const app = express();

app.use(express.json());
/*Importing Error Handlers*/
const {mongoose_errors_to_json} = 
	require("./functions/error_handlers/error_to_json.js");


/*Importing Abstractions*/
const {listEndPoint, createEndPoint, 
	detailsEndPoint, updateEndPoint, deleteEndPoint} = 
	require("./functions/abstraction/model_endpoints.js");


/*Importing Models*/
const {Product} = require("./schemas/_db.js");



/*


*/



/*Ping*/

app.get('/', function (req, res) {
  res.send('Hello World')
});



/*Product: List*/

app.get('/products', listEndPoint(Product));


/*Product: Create*/
app.post('/products', createEndPoint(Product));



/*Product: Details*/

app.get('/products/:id', detailsEndPoint(Product, "product"));








/*Product: Update*/

app.put('/products/:id', updateEndPoint(Product, "product"));







app.delete('/products/:id', deleteEndPoint(Product,"product"));

/*Product: Delete*/
/*app.delete('/products/:id', function(req, res) {
	let product_id = req.params.id;
	let product;
	//console.log("I search this id");

	Product.findByIdAndDelete(product_id, function (err, p) {
		if (err) 
		{
			res.statusCode = 404;
			res.send({"_id":"there is no product with this _id"});
			//console.log("I did not find this id");
		}
		else
		{
			if (p)
			{res.send({"success":true,
				"message":"product deleted successfully"});}
			else
			{
				res.statusCode = 404;
				res.send({"_id":"there is no product with this _id"});
			}			
		}
	});
});

*/





















/*Product: Update*/

/*app.get('/products/:id', function(req, res) {
	let product_id = req.params.id;
	
	Product.findById(product_id, function (err, product) {
		if (err) 
		{
			res.statusCode = 404;
			res.send({"_id":"there is no product with this _id"});
		}
		else
		{
			console.log(product);
			res.send(product);
		}
	});
});

*/







/*


{
	"description":
		{
			"name":"ValidatorError",
			"message":"Path `description` is required.",
			"properties":
				{"message":"Path `description` is required.",
				"type":"required",
				"path":"description"
				},
			"kind":"required",
			"path":"description"
		},


		"price":{"name":"ValidatorError","message":"Path `price` is required.","properties":{"message":"Path `price` is required.","type":"required","path":"price"},"kind":"required","path":"price"}}


*/
/*



{
  description: ValidatorError: Path `description` is required.
      at validate (E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\schematype.js:1270:13)
      at E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\schematype.js:1253:7
      at Array.forEach (<anonymous>)
      at SchemaString.SchemaType.doValidate (E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\schematype.js:1198:14)
      at E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\document.js:2545:18
      at processTicksAndRejections (internal/process/task_queues.js:75:11) {
    properties: {
      validator: [Function (anonymous)],
      message: 'Path `description` is required.',
      type: 'required',
      path: 'description',
      value: undefined
    },
    kind: 'required',
    path: 'description',
    value: undefined,
    reason: undefined,
    [Symbol(mongoose:validatorError)]: true
  },
  price: ValidatorError: Path `price` is required.
      at validate (E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\schematype.js:1270:13)
      at E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\schematype.js:1253:7
      at Array.forEach (<anonymous>)
      at SchemaNumber.SchemaType.doValidate (E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\schematype.js:1198:14)
      at E:\0Developer\Projects\Cantiin\cantiin_expressjs_mongo\src\node_modules\mongoose\lib\document.js:2545:18
      at processTicksAndRejections (internal/process/task_queues.js:75:11) 

  {
    properties: {
      validator: [Function (anonymous)],
      message: 'Path `price` is required.',
      type: 'required',
      path: 'price',
      value: undefined
    },
    kind: 'required',
    path: 'price',
    value: undefined,
    reason: undefined,
    [Symbol(mongoose:validatorError)]: true
  }
}


*/




/*
{"stringValue":"\"60fa57b72d712q2ec8d192ef\"",
"valueType":"string",
"kind":"ObjectId",
"value":"60fa57b72d712q2ec8d192ef",
"path":"_id","reason":{},
"name":"CastError",
"message":"Cast to ObjectId failed for value \"60fa57b72d712q2ec8d192ef\" (type string) at path \"_id\" for model \"Product\""}
*/


 
app.listen(3000)