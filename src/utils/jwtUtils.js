const jwt = require('jsonwebtoken');

//Library to make from callback to promise
// const util = require('util');
// const jwtSing = util.promisify(jwt.sign);

function jwtSing(payload, secret) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function (err, token) {
           if(err) {
               reject(err);
           } else {
               resolve(token);
           }    
        });
    });
     
}

const utils = {
    jwtSing,    
}

module.exports = utils;