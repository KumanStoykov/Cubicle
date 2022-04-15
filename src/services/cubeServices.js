const Cube = require('../models/Cube');

const cubeDb = [
    {
        name: 'Rubik',
        description: 'Very good',
        imageUrl: 'No image',
        difficulty: '3'
    }
];

const getAll = () => cubeDb.slice();

const create = (name, description, imageUrl, difficulty) => {

    let cube = new Cube(name, description, imageUrl, difficulty);

    cubeDb.push(cube);
};

const cubeService = {
    create,
    getAll
}

module.exports = cubeService;