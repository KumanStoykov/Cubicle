const router = require('express').Router();

const cubeService = require('../services/cubeServices');
const cubeAccessoryController = require('./cubeAccessoryController');
const authMiddleware = require('../middlewares/authMiddleware');
const isOwner = require('../middlewares/cubeAuthMiddleware');


const renderCreateCube = (req, res) => {
    res.render('cube/create');
};

const createCube = async (req, res) => {

    let { name, description, imageUrl, difficulty } = req.body;     

    try {
        await cubeService.create(name, description, imageUrl, difficulty, req.user._id);
        res.redirect('/');

    } catch (err) {
        res.locals.error = err.message;
        res.render('cube/create');
    }

}

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    
    let isOwn = cube.owner == req.user?._id;    

    res.render('cube/details', { ...cube, isOwn });
};

const renderEditCube =  (req, res) => {
    let cube =  req.cube;

    res.render('cube/edit', { ...cube });
};

const editCube = async (req, res) => {
      
  let { name, description, imageUrl, difficulty } = req.body;
 

  await cubeService.updateOne({_id: req.params.cubeId}, { name, description, imageUrl, difficulty });

  res.redirect(`/cube/${req.params.cubeId}`);
};

const renderDeleteCube = (req, res) => {
    let cube = req.cube;

    res.render('cube/delete', { ...cube });
};

const deleteCube = async (req, res) => {
    await cubeService.deleteOne(req.params.cubeId);

    res.redirect('/');
};

router.get('/create', authMiddleware.isAuth, renderCreateCube);
router.post('/create', authMiddleware.isAuth, createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/edit', authMiddleware.isAuth, isOwner, renderEditCube);
router.post('/:cubeId/edit', authMiddleware.isAuth, isOwner, editCube);
router.get('/:cubeId/delete', authMiddleware.isAuth, isOwner, renderDeleteCube);
router.post('/:cubeId/delete', authMiddleware.isAuth, isOwner, deleteCube);

router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;