const Cube = require('../models/Cube');

const getAll = async () => await Cube.find({}).lean();

const getOne = async (id) => await Cube.findById(id);

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
    
    if(text) {
       result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }
    if(from) {
       result = result.filter(x => x.difficulty >= from);
    }
    if(to) {
       result = result.filter(x => x.difficulty <= to);
    }
    
    return result;
};

const cubeService = {
    create,
    getAll,
    getOne,
    search
}

module.exports = cubeService;