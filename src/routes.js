const express = require('express');

const cubeControllers = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeControllers);

module.exports = router;