const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let heroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
    },
    availability: {
        type: Boolean,
        default: false
    }
});

let Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;