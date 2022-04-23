const route = require('express').Router();


route.get('/login', (req, res) => {
   res.render('auth/login'); 
});

route.post('/login', (req, res) => {
    
    res.redirect('/');
});


module.exports = route;