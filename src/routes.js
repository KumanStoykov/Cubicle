const express = require('express');

const cubeControllers = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeControllers);
router.use('/accessory', accessoryController);
router.use(authController);
router.use('*', (req, res) => {
    res.status(404).render('404');
});

module.exports = router;