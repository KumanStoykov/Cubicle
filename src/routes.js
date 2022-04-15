const express = require('express');

const cubeControllers = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

const router = express.Router();

router.use(homeController);
router.use(cubeControllers);

module.exports = router;