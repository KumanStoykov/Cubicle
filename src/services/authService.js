const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwtUtils');
const { SECRET } = require('../constants');



const register = (username, password, repeatPassword) => {

    // return bcrypt.hash(password, 9)
    //  .then(hash => User.create({ username, password: hash }));
    return User.create({ username, password });
};

const login = (username, password) => {
    return User.findByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password' }
            }
        })
        .catch(() => null);
};
function createToken(user) {
    let payload = {
        _id: user._id,
        username: user.username,
    };

    return jwtUtils(payload, SECRET)

}



const authService = {
    register,
    login,
    createToken
};

module.exports = authService;