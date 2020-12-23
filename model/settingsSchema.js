const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    maxAttempts: {
        type: Number,
        require: true,
    },
    attemptDelay: {
        type: Number,
        require: true
    },
    blockAccess: {
        type: Boolean,
        require: true,
    },
    passwordChange: {
        type: Boolean,
        require: true
    },
    minPasswordLength: {
        type: Number,
        require: true
    },
    requiresCaps: {
        type: Boolean,
        require: true
    },
    requiresNumber: {
        type: Boolean,
        require: true
    },
    requiresSpecial: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Settings', settingsSchema);