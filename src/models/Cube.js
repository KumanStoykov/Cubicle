const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'aspikjfaspifhads',
            name: 'Rubik',
            description: 'Very good',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKuLo_qSSZiP6o2fG91JjPumcXbrQzpYOUT9jPYfZfDNToV0nIY3Cgs5_I126nfF8xpE&usqp=CAU',
            difficulty: '3'
        }
    ]

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.difficulty = difficulty        
    }

    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;