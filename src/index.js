const express = require('express');

/*Importing Error Handlers*/
const {mongoose_errors_to_json} = 
	require("./functions/error_handlers/error_to_json.js");

/*Importing Abstractions*/
const {listEndPoint, createEndPoint, 
	detailsEndPoint, updateEndPoint, deleteEndPoint} = 
	require("./functions/abstraction/model_endpoints.js");

/*Importing Models*/
const {Product, Order} = require("./schemas/_db.js");


const app = express();
app.use(express.json());

/*Ping*/

app.get('/', function (req, res) {
  res.send('Hello World')
});



/*Product Endpoints*/
app.get('/products', listEndPoint(Product));
app.post('/products', createEndPoint(Product));
app.get('/products/:id', detailsEndPoint(Product, "product"));
app.put('/products/:id', updateEndPoint(Product, "product"));
app.delete('/products/:id', deleteEndPoint(Product,"product"));




/*Order Endpoints*/
app.get('/orders', listEndPoint(Order));
app.post('/orders', createEndPoint(Order));
app.get('/orders/:id', detailsEndPoint(Order, "order"));
app.put('/orders/:id', updateEndPoint(Order, "order"));
app.delete('/orders/:id', deleteEndPoint(Order,"order"));





 
app.listen(3000)
