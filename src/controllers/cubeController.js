const router = require('express').Router();

const cubeService = require('../services/cubeServices');
const cubeAccessoryController = require('./cubeAccessoryController');


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

    res.render('cube/details', { ...cube });
};

const renderEditCube = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);

    res.render('cube/edit', { ...cube});
};
const renderDeleteCube = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);

    if(!req.user) {
        return res.status(401).redirect('/login');
    }  

    res.render('cube/delete', { ...cube});
};

router.get('/create', renderCreateCube);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);
router.use('/:cubeId/accessory', cubeAccessoryController);
router.get('/:cubeId/edit', renderEditCube);
router.get('/:cubeId/delete', renderDeleteCube);

module.exports = router;