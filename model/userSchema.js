const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        dropDups: true
    },
    name: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: false,
        default: "Guest"
    }
})

module.exports = mongoose.model('User', userSchema);