const User = require('../models/User');
// const bcrypt = require('bcrypt');


const register = (username, password, repeatPassword) => {

    // return bcrypt.hash(password, 9)
    //  .then(hash => User.create({ username, password: hash }));
    return User.create({ username, password });
};

const authService = {
    register,
};

module.exports = authService;