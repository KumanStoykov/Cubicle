const route = require('express').Router();


route.get('/login', (req, res) => {
   res.render('auth/login'); 
});


module.exports = route;