const router = require('express').Router();
const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    let user = await authService.login(username, password);

    if(user) {
        res.redirect('/');
    } else {
        res.redirect('/404');
    }

});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try{
        let { username, password, repeatPassword } = req.body;

        await authService.register(username, password, repeatPassword);
    
        res.redirect('/login'); 
    } catch(err) {
        res.status(400).send(err.message);
    }
});


module.exports = router;