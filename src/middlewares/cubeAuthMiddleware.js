const cubeService = require('../services/cubeServices');

const isOwnerCube = async (req, res, next) => {
    let cube = await cubeService.getOne(req.params.cubeId);
    

    if (cube.owner == req.user?._id) {
        req.cube = cube;

        next();
    } else {
        next('You are not authorized to edit this cube');
    }
}; 

module.exports = isOwnerCube;