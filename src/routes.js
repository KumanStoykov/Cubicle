const express = require('express');

const cubeControllers = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeControllers);
router.use('/accessory', accessoryController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;