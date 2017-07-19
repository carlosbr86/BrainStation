const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // portal

const Car = require('./models/Cars');
const Dealership = require('./models/Dealerships');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect('mongodb://localhost/data/db/');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


app.get("/getAllCars",(req,res)=>{
    Car.find({})
        .then(cars =>{
            return res.json(cars);
        })
        .catch(error=>{
            return res.status(500).json(error)
        })
})


app.get("/getCar/:id", (req, res)=> {
Car.findOne({_id: req.params.id}) //finds object with name
    .then(cars => {
        return res.json(cars);
    })
    .catch(error => {
        return res.status(500).json(error);
    })
});

app.post('/postCar', (req,res) =>{
    console.log("######################### CREATE NEW CAR ##########################");
    let newCar = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        dealership_id: req.body.dealership_id
    })
    newCar.save().then(savedCar => {
        console.log(savedCar);
        res.send(savedCar);
        }).catch(error => {
        console.log(error);
        res.send(error);
        })
})


app.put('/putCar/:id', (req,res) =>{
    console.log("######################### UPDATE A  CAR ##########################");
    let updateCar = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        dealership_id: req.body.dealership_id
    }
     Car.findOneAndUpdate({_id:req.params.id},updateCar)
        .then(oldVersion=>{
        console.log(oldVersion)
        res.send(oldVersion);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
})

app.delete('/deleteCar/:id',(req,res)=>{
    console.log("######################### DELETING A CAR ##########################");
    Car.findOneAndRemove({_id:req.params.id})
    .then(removed =>{
        console.log(removed)
        res.send(removed);
    }).catch(error=>{
        console.log("error");
        res.send(error);
    })
})
//############################### DealerShip ################
app.get("/getAllDealerships",(req,res)=>{
    Dealership.find({})
        .then(dealerships =>{
            return res.json(dealerships);
        })
        .catch(error=>{
            return res.status(500).json(error)
        })
})


app.get("/getDealerships/:id", (req, res)=> {
Dealership.findOne({_id: req.params.id}) //finds object with name
    .then(dealerships => {
        return res.json(dealerships);
    })
    .catch(error => {
        return res.status(500).json(error);
    })
});

app.post('/postDealership', (req,res) =>{
    console.log("######################### CREATE NEW DEALER ##########################");
    let newDealership = new Dealership({
        make: req.body.make,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        street: req.body.street
    })
    newDealership.save().then(savedDealership => {
        console.log(savedDealership);
        res.send(savedDealership);
        }).catch(error => {
        console.log(error);
        res.send(error);
        })
})


app.put('/putDealership/:id', (req,res) =>{
    console.log("######################### UPDATE A  DEALER  ##########################");
    let updateDealership = {
        make: req.body.make,
        city: req.body.city,
        province: req.body.province,
        postal_code: req.body.postal_code,
        street: req.body.street
    }
    Dealership.findOneAndUpdate({_id:req.params.id},updateDealership)
        .then(oldVersion=>{
        console.log(oldVersion)
        res.send(oldVersion);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        })
})

app.delete('/deleteDealership/:id',(req,res)=>{
    console.log("######################### DELETING A CAR ##########################");
    Dealership.findOneAndRemove({_id:req.params.id})
    .then(removed =>{
        console.log(removed)
        res.send(removed);
    }).catch(error=>{
        console.log("error");
        res.send(error);
    })
})

//##########################################################
const seedDealerships = require('./seeds/dealerships');
const seedCars = require('./seeds/cars');
seedDealerships();
seedCars();

app.listen(8080, () => {
    console.log('SERVER RUNNING ON 8080');
})
