const mongoose = require('mongoose');
const Dealership = require('../models/Dealerships');
const Car = require('../models/Cars');


module.exports = () => {
    Car.find({}, (err, cars) => {
        if (err) {
            console.log(err);
        } else if (cars.length === 0) {
            Dealership.find({}, (err, dealerships) => {
                if (err) {
                    console.log(err);
                } else {
                    if (dealerships.length < 2) {
                        console.log('No dealership to use for seeding cars');
                    } else {
                        const carsToSeed = [
                            {make: 'Hyundai', model: 'Elantra', year: 2017, dealership_id: dealerships[0]._id},
                            {make: 'Hyundai', model: 'Elantra', year: 2016, dealership_id: dealerships[0]._id},
                            {make: 'Hyundai', model: 'Elantra', year: 2017, dealership_id: dealerships[1]._id}
                        ];
                        Car.collection.insert(carsToSeed, (err, cars) => {
                            console.log(cars)
                        })
                    }
                }
            })            
        }
    })
}
