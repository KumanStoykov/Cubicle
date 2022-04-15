const express = require('express');
const cubeServices = require('../services/cubeServices');

const router = express.Router();

const home = (req, res) => {
    let cubes = cubeServices.getAll();

    res.render('index', { cubes });
};

router.get('/', home);

module.exports = router;