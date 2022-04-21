const express = require('express');

const cubeService = require('../services/cubeServices');
const cubeAccessoryController = require('./cubeAccessoryController');

const router = express.Router();

const renderCreateCube = (req, res) => {
    res.render('cube/create');
};

const createCube = async (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/');

    } catch (err) {
        res.status(400).send(err.message);
    }

}

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    console.log(cube)

    res.render('cube/details', { ...cube });
};

router.get('/create', renderCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);


router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;