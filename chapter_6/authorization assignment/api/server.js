const express       = require('express');
const bodyParser    = require('body-parser');
const fs            = require('fs');
const bcrypt        = require('bcryptjs');
const jwt           = require('jsonwebtoken');

let JWT_SECRET_KEY= 'brainstation';

//middleware
const authorize     = require('./middleware/authorize');

//application
const app = express();
const PORT = 3005;
app.use(bodyParser.json());

//defines which origins and headers are permitted
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization1");
  next();
});

//POST endpoint for password encryption and creating user profiles
app.post('/encrypt',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    //generate salt and create a hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
                // Store hash in your password DB. 
                if(err) console.log(err);

                fs.writeFile('notpasswords/'+username+'.txt',hash, (err) => {
                    if(err) throw err;
                    res.json('Password Saved');
                });
            });
        });


});

//POST endpoint for logging in to the server
app.post('/login', (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    /*
        TASK 1: Check if the user provides the right password for their username.
        If the password is correct, then create a token with the username, using a secret key of your choice, and send the token back
    */
    if (username) {
        fs.readFile('notpasswords/'+username+'.txt','UTF8', (err, data) => {
            if(err) {
                throw err;
            }else{
                bcrypt.compare(password, data, (err, result) => {
                    if(result==true){
                        let token = jwt.sign({username:username}, JWT_SECRET_KEY)
				        res.status(200).json({token:token})
                        console.log("Valid Credentials")
			        }else{
				        res.status(403)
				        .json({error: "Invalid Credentials"})
                        console.log("Invalid Credentials")
			        };
                });
            };
       });
   }else{
        res.send("Invalid User")    
    };
});   
 
//GET endpoint for '/privatedata' goes here:
/* 
    TASK 5: This endpoint should require that all requests to this endpoint pass through the middleware created in the previous task.
    TASK 6: If the request passes through the middleware and makes it to this endpoint, send back the username that was stored in the token. 
*/


app.get('/private', authorize(JWT_SECRET_KEY), (req, res)=>{
    let username = req.decoded.username;
    res.send(username)
})



app.listen(PORT, () => {
    console.log('Server Started on http://localhost:%s',PORT);
    console.log('Press CTRL + C to stop server');
});