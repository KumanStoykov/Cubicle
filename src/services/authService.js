const User = require('../models/User');
const bcrypt = require('bcrypt');


const register = (username, password, repeatPassword) => {

    // return bcrypt.hash(password, 9)
    //  .then(hash => User.create({ username, password: hash }));
    return User.create({ username, password });
};

const login = (username, password) => {
    return User.findByUsername(username)
        .then(user => Promise.all([bcrypt.compare(password, user.password), user]))
        .then(([isValid, user]) => {
            if(isValid) {
                return user;
            } else {
                 throw { message: 'Cannot find username or password'}
            }
        })
}

const authService = {
    register,
    login
};

module.exports = authService;