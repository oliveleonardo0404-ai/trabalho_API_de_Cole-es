const mongoose = require('mongoose');

const Items = mongoose.model('Items', {
    name: String,
    value: Number,
    type: String, //qual tipo ele é exemplo: jogo , filme ou algo assim
    isActive: {
    type: Boolean,
    default: true
},

});


module.exports = Person;

