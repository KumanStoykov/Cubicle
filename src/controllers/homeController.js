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

const search = (req, res) => {
    let search = req.query.search;
    let from = Number(req.query.from);
    let to = Number(req.query.to);

    let cubes = cubeServices.search(search, from, to);

    res.render('index', { cubes });
}

router.get('/', home);
router.get('/about', about);
router.get('/search', search);

module.exports = router;