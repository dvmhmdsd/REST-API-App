const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// geoJSON
let geoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});


let heroSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: geoSchema
});

let Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;