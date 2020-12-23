const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    companyName: {
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

module.exports = mongoose.model('Business', businessSchema);