import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
	name:  String, 
	price:   Number,
	description: String
});