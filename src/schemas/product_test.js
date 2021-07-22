const mongoose = require('mongoose');

//const {Product} = require("./product.js");



mongoose.connect(
	'mongodb://localhost:27017/cantiin', 
	{useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB");
});




const productSchema = new mongoose.Schema({
	name:{
		"type":String,
		"minLength": 3,
		"maxLength":200,
		"required":true
	}, 
	price: { 
		type: Number,
		min: [.01, "No product should have a price less than .01"], 
		max: 1000000,
		"required":true
	},
	description: {
		"type":String,
		"minLength": 5,
		"maxLength":1000,
		"required":true
	},
});


const Product = mongoose.model('Product', productSchema);




const p1 = new Product({"name":"Labtop",
	"description":
	"This labtop is for sale.",
	"price":5
});




p1.save(function (err, p1) {
if (err) return console.error(err);
});