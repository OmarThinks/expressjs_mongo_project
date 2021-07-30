const mongoose = require('mongoose');

const {productSchema} = require("./product.js");
const {orderSchema} = require("./order.js");


mongoose.connect(
	'mongodb://localhost:27017/cantiin', 
	{useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB");
});



const Product = mongoose.model('Product', productSchema);
const Order = mongoose.model('Order', orderSchema);





module.exports={Product, Order};
