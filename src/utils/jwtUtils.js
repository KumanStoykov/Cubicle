const jwt = require('jsonwebtoken');

function jwtSing(payload, secret) {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function (err, token) {
           if(err) {
               reject(err);
           } else {
               resolve(token);
           }    
        });
    });
    return promise;   
}

const utils = {
    jwtSing,    
}

module.exports = utils;