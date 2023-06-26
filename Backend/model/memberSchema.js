const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email Required']
    },
    phoneNumber: String,
    dateJoined: {
        type: Date,
        date: Date.now()
    }
});

module.exports = mongoose.model('Member', memberSchema);