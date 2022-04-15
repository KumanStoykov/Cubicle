const express = require('express');

const cubeService = require('../services/cubeServices');

const router = express.Router();

const renderCreateCube = (req, res) => {
    cubeService.getAll();

    res.render('create');
};

const createCube = (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body;

    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/');
}

router.get('/create', renderCreateCube);
router.post('/create', createCube);

module.exports = router;