const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9 ]+$/, 'User name should consist of english letters, digits and spaces!']
    },
    description: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9 ]+$/, 'User name should consist of english letters, digits and spaces!'],
        maxlength: 100,
        minlength: 20
    },
    imageUrl: {
        type: String,
        required: true,
        //validate: [/^https?:\/\//i, 'Invalid image url']
        validate: {
            validator: function (value) {
                return /^https?:\/\//i.test(value);
            },
            message: 'Image Url {VALUE} is invalid!'
        }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

cubeSchema.statics.findByName = function (name) {
    return this.find({ name });
};


const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;