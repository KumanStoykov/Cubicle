const express = require('express');
const cubeServices = require('../services/cubeServices');

const router = express.Router();

const home = (req, res) => {
    let cubes = cubeServices.getAll();

    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
}

router.get('/', home);
router.get('/about', about);

module.exports = router;