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

const cubeDetails = (req, res) => {
    let cube = cubeService.getOne(req.params.cubeId);
    console.log(cube)

    res.render('details', { ...cube });
};

router.get('/create', renderCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;