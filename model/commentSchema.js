const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    gameId: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    createdDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema);