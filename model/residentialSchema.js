const mongoose = require('mongoose');

const residentialSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Residential', residentialSchema);