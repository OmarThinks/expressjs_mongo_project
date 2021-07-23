const express = require('express')
const app = express()
 

/*Importing Models*/
const {Product} = require("./schemas/_db.js");




app.get('/', function (req, res) {
  res.send('Hello World')
});


/*
app.get('/products', function (req, res) {
  


	res.send('Hello World');

});

*/


app.get('/products', function(req, res) {
  Product.find({}, function(err, products) {
    var productMap = {};

    products.forEach(function(product) {
      productMap[product._id] = product;
    });

    res.send(productMap);  
  });
});



 
app.listen(3000)