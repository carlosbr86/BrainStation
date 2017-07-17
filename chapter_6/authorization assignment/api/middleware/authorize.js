/* 
	TASK 4: In this file, you will create a middleware that will check a request for the authToken.
	If a token is found it should verify the token with the secret key used to generate the token
	If the token is verified, the contents of the token should be stored in the request and the request should be passed on.
	
	If no token is found or cannot be verified, then send back a response with a status code of 403 along with an appropriate error message.
	Remember to require jsonwebtoken here.
*/
const jwt = require('jsonwebtoken');

module.exports = (key) => {
    return (req,res,next) => {
        //check if there is token in the body, a url parameter, or the request headers
        let token = req.body.token || req.params.token || req.headers['authorization1'];
        if (token) {
            //try and decode token with the key that was used to encrypt it
            jwt.verify(token, key, function(err, decoded) {          
                if (err) {
                    return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });      
                } else {
                    req.decoded = decoded;  
                    next();
                }
            });   
        } else {
            //if there is no token send an error
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.'
            });
        }
    }
};