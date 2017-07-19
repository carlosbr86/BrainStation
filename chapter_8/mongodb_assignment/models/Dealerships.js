/* In Dealership.js */
// Require mongoose in this file.
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Create a schema.
const dealershipSchema = new mongoose.Schema({
  make: String,
  city: String,
  province: String,
  postal_code: String,
  street: String
});

// Create a model using schema.
//Take schema and feed it in to mongoose.model
const Dealership = mongoose.model('Dealership', dealershipSchema);

// Make this available to our Node applications.
module.exports = Dealership;