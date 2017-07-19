/* In Car.js */
// Require mongoose in this file.
const mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;
// const Schema = mongoose.Schema;

// Create a schema.
const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: String,
  dealership_id: {type: ObjectId, ref: "Dealership"}
});

// Create a model using schema.
//Take schema and feed it in to mongoose.model
const Car = mongoose.model('Car', carSchema);

// Make this available to our Node applications.
module.exports = Car;