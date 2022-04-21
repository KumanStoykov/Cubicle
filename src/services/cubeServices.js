const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

const getAll = async () => await Cube.find({}).lean();

const getOne = async (id) => await Cube.findById(id).populate('accessories').lean();

const create = async (name, description, imageUrl, difficulty) => {
    let cube = new Cube({
        name,
        description,
        imageUrl,
        difficulty
    });

    return await cube.save();
};

const search = async (text, from, to) => {
    let result = await getAll();

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }
    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }
    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    return result;
};

const attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    cube.save();
};

const cubeService = {
    create,
    getAll,
    getOne,
    search,
    attachAccessory
}

module.exports = cubeService;