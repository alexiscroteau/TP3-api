const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    _id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    bannerPath: {
        type: Object,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    grade: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    createdDate: {
        type: String,
        require: true
    },
    isPublic: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Game', gameSchema);