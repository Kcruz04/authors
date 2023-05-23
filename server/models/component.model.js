const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "You really thought you could just not enter a First Name???"],
        minLength: [3, "Must be at least 3 cahracters"]
    },
    lastName: {
        type: String,
        required: [true, "You really thought you could just not enter a Last Name???"],
        minLength: [3, "Must be at least 3 cahracters"]
    },
}, {timestamps: true});

module.exports.Component =  mongoose.model('Component', ComponentSchema);