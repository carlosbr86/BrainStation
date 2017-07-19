const express = require('express');
const app = express();
const bodyParser    = require('body-parser');

app.listen('8080',()=>{
    console.log("Server running on 8080");
})

app.use(bodyParser.urlencoded({ extended: false})); //MidleWare
app.use(bodyParser.json()); //MidleWare


// require and configure knex
const knex = require('knex')({
  client: 'postgres',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'postgres',
    database : 'carsANDdealerships',
    charset  : 'utf8'
  }
});
// then connect bookshelf with knex
const bookshelf = require('bookshelf')(knex);

//BEFORE MAKE THE LINK BETWEEN TABLES

//we will create our model:   It is conventional to give models a singular, capitalized name.
//relations between tables
const Car = bookshelf.Model.extend({
    tableName: 'cars',
    dealership: function(){
        return this.belongsTo(Dealership,'dealership_id');
    }
})

const Dealership = bookshelf.Model.extend({
    tableName: 'dealerships',
    cars: function() {
        return this.hasMany(Car);
    }
})

// ######################################### CARS ###########################
/*EXAMPLE OF A CAR OBJECT
{
  "make": "Lamborghini", 
  "model": "Aventador",
  "year": 2017,
  "dealership_id": 22
}
*/
app.get('/getAllCars', (req, res) => {
    console.log("######################### GET ALL CARS ##########################");
    Car.fetchAll()
        .then((cars)=>{
            res.send(cars);
            console.log(cars);
            console.log("#################################################################");
        });
});

app.get('/getCar/:id', (req,res) =>{
    console.log("######################### GET CAR BY ID ##########################");
    Car.where({id:req.params.id}) //req.params.id
        .fetch()
        .then(car=>{
            console.log(car);
            res.send(car);
            console.log("#################################################################");
    //get dealership of a single car
    Car.where({id: 1}).fetch({withRelated: ['dealership']}).then(function(car) {
        console.log("#########################  dealership of a single car##########################");
        console.log(JSON.stringify(car.related('dealership')));
        console.log("#################################################################");
});

        })  
})

app.post('/postCar', (req,res) =>{
    console.log("######################### CREATE NEW CAR ##########################");
    let newCar = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        dealership_id: req.body.dealership_id
    })
    newCar.save()
        .then(car => {
            console.log(car);
            console.log("#################################################################");
        })
    res.send(newCar);
})

app.put('/putCar/:id', (req,res) =>{
    console.log("######################### UPDATING A CAR ##########################");
    let updateCar = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        dealership_id: req.body.dealership_id
    }
    
    new Car ({id:req.params.id})
        .save(updateCar, {patch:true})
        .then(updated =>{
            console.log(updated);
            console.log("#################################################################");
            res.send(updated);
    })
})

app.delete('/deleteCar/:id',(req,res)=>{
    console.log("######################### UPDATING A CAR ##########################");
    new Car({id: req.params.id})
        .destroy()
        .then(deleted=>{
            console.log(deleted);
            console.log("#################################################################");
            res.send(deleted);
        });
})
// #############################################################################
// ######################################### DEALERS ###########################
/*EXAMPLE OF DEALER OBJECT
// - make: string
// - city: string
// - province: string
// - postal_code: string
// - street: string
*/
app.get('/getAllDealers', (req, res) => {
    console.log("######################### GET ALL DEALERS ##########################");
    Dealership.fetchAll()
        .then((dealers)=>{
            res.send(dealers);
            console.log(dealers);
            console.log("#################################################################");
        });
});

app.get('/getDealer/:id', (req,res) =>{
    console.log("######################### GET DEALER BY ID ##########################");
    Dealership.where({id:req.params.id}) //req.params.id
        .fetch()
        .then(dealership=>{
            console.log(dealership);
            res.send(dealership);
            console.log("#################################################################");
        })
    //get all cars for a single dealership
    Dealership.where({id: req.params.id}).fetch({withRelated: ['cars']}).then(function(dealership) {
        console.log("#########################  get all cars for a single dealership #########################");
        console.log(JSON.stringify(dealership.related('cars')));
        console.log("#################################################################");
});

})

app.post('/postDealer', (req,res) =>{
    console.log("######################### CREATE NEW DEALER ##########################");
    let newDealership = new Dealership({
        make: req.body.make,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        street: req.body.street
    })
    newDealership.save()
        .then(dealership => {
            console.log(dealership);
            console.log("#################################################################");
        })
    res.send(newDealership);
})

app.put('/putDealer/:id', (req,res) =>{
    console.log("######################### UPDATING A DEALER ##########################");
    let updateDealeship = {
        make: req.body.make,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        street: req.body.street
    }
    
    new Dealership ({id:req.params.id})
        .save(updateDealership, {patch:true})
        .then(updated =>{
            console.log(updated);
            console.log("#################################################################");
            res.send(updated);
    })
})

app.delete('/deleteDealer/:id',(req,res)=>{
    console.log("######################### UPDATING A DEALER ##########################");
    new Dealership({id: req.params.id})
        .destroy()
        .then(deleted=>{
            console.log(deleted);
            console.log("#################################################################");
            res.send(deleted);
        });
})

//get cars with a filter (e.g., year is 2017)
Car.where({year: 2017})
    .fetchAll()
    .then(cars=>{
		console.log(cars.map(car => car.attributes))
    });

