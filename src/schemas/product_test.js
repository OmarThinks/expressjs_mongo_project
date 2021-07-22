const {Product} = require("./_db.js");


const p1 = new Product({"name":"Labtop",
	"description":
	"This labtop is for sale.",
	"price":5
});




p1.save(function (err, p1) {
if (err) return console.error(err);
});