const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', Schema);