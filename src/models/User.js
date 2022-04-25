const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [4,'Username cannot be with less then 4 characters'],
    },
    password: {
        type: String,
        required: true,
    },    
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;