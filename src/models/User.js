const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9]+$/, 'User name should consist of english letters and digits!'],
        unique: true,
        minlength: [5, 'Username cannot be with less then 4 characters'],
    },
    password: {
        type: String,
        minlength: [8, 'Your password should be at least 6 characters'],
        validate: [/^[a-zA-Z0-9]+$/, 'User name should consist of english letters and digits!'],
        required: true,
    },
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });

});

userSchema.static('findByUsername', function (username) {
    return this.findOne({ username });
});

userSchema.method('validatePassword', function(password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;