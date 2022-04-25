const router = require('express').Router();

const cubeService = require('../services/cubeServices');
const cubeAccessoryController = require('./cubeAccessoryController');
const authMiddleware = require('../middlewares/authMiddleware');


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

    res.render('cube/edit', { ...cube });
};
const renderDeleteCube = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);

    res.render('cube/delete', { ...cube });
};

const deleteCube = async (req, res) => {
    await cubeService.deleteOne(req.params.cubeId);

    res.redirect('/');
};

router.get('/create', authMiddleware.isAuth, renderCreateCube);
router.post('/create', authMiddleware.isAuth, createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/edit', authMiddleware.isAuth, renderEditCube);
router.get('/:cubeId/delete', authMiddleware.isAuth, renderDeleteCube);
router.post('/:cubeId/delete', authMiddleware.isAuth, deleteCube);

router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;