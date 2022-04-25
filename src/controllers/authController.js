const router = require('express').Router();
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {

    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    let { username, password, repeatPassword } = req.body;

    authService.register(username, password, repeatPassword);
        res.redirect('/');
});


module.exports = router;