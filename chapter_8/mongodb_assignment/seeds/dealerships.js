const Dealership = require('../models/Dealerships');
const dealershipsToSeed = [
    {make: 'Hyundai', city: 'Toronto', province: 'ON', postal_code: 'M4M 2E4', street: '21 Broadview Ave', reviews: []},
    {make: 'Hyundai', city: 'Thornhill', province: 'ON',  postal_code: 'L4J 1V8', street: '7200 Yonge St', reviews: []}    
] 

module.exports = () => {
    Dealership.find({}, (err, dealerships) => {
        if (err) {
            console.log(err)
        } else {
            if (dealerships.length === 0) {
                Dealership.collection.insert(dealershipsToSeed, (err, dealerships) => {
                    console.log(dealerships)
                })
            }
        }
    })
}