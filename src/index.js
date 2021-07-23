const express = require('express');
const app = express();
app.use(express.json());

/*Importing Models*/
const {Product} = require("./schemas/_db.js");






function mongoose_errors_to_json(raised_err)
{
	let errors = raised_err.errors;
	
	let errors_json = {};
	for (const err in errors) {
  		errors_json[err] = errors[err].message;
	}
	return errors_json;
}


app.get('/', function (req, res) {
  res.send('Hello World')
});




app.get('/products', function(req, res) {
  Product.find({}, function(err, products) {
    var productMap = {};

    products.forEach(function(product) {
      productMap[product._id] = product;
    });

    res.send(productMap);  
  });
});


app.post('/products', function(req, res) {
	
	const p1 = new Product(req.body);
	
	p1.save(function (err, p1) {
	if (err) {
		res.statusCode = 400;
		res.send(mongoose_errors_to_json(err));
	}
	else
	{
		console.log(p1);
		res.send(p1);
	}
	});

});




app.get('/products/:id', function(req, res) {
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




 
app.listen(3000)