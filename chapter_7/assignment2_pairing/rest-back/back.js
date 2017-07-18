const express = require('express'),
    app = express();
const bodyParser = require('body-parser')
const fs = require("fs");
const axios = require('axios');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser()); //MidleWare

app.post('/postdata', (req, res) => {
    console.log("Post Request - Currency")
    console.log(req.body);
    const start = new Date(req.body.startDate);
    const future = new Date(req.body.finalDate);
    const urlArray = []
    let arr = []
    const mil = 86400000 //24h
    let base= req.body.baseCurrency
    let symbol=req.body.symbolCurrency
    for (var i=start.getTime(); i<future.getTime();i=i+mil) {
        arr = JSON.stringify(new Date(i))
        urlArray.push(`http://api.fixer.io/`+arr.split('T')[0].split('"')[1]+`?base=${base}&symbols=${symbol}`);
    }

    let date = '';
    let promiseArray = urlArray.map(url => axios.get(url)); // or whatever

    axios.all(promiseArray)
        .then(function(results) { 
        date = results.map(r => r.data);
        let newData = ["date,value"]
        date.map((daily)=>{
            let string = daily.date + ',' + daily.rates[symbol]; //acess dynamic object parameter
            newData.push(string);
            
            return string;
         })   
        console.log("date=>",date);
        newData= newData.join('\n')

        fs.writeFile("../react-rest-front/public/data.csv", newData, 'utf8', (err) => {
            console.log("writing file")
            if (err) console.log( err);

        });
    });      

});

app.listen(2222, () => {
    console.log('Listening on port 2222!');
});







//app.get('./index.html');

//app.use(express.static('public'));





// FUNCTION TREAT THE DATA

// format of date:   { base: 'CAD', date: '2017-05-05', rates: { USD: 0.72618 } },
//date,value
//console.log(date)

//  { base: 'CAD', date: '2017-04-13', rates: { USD: 0.75556 } },
// 2017-5-25,66.28
