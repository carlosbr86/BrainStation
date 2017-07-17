const express = require('express'),
    app = express();
const bodyParser = require('body-parser')
const fs = require("fs");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser()); //MidleWare

app.get('/gettodos', (req, res) => {
    console.log("somebody asked for good dogs");
    fs.readFile('todolist.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

app.post('/newtodos', (req, res) => {
    console.log("Post Request")
    console.log(req.body);
    fs.writeFile('todolist.json', JSON.stringify(req.body), 'utf8', (err) => {
        if (err) throw err;
        console.log('Writing file!');
    });
});

app.listen(8080, () => {
    console.log('Listening on port 8080!');
});