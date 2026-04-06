const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    Age: {
  type: Number,
  required: true,
  min: 0
},
 isActive: {
    type: Boolean,
    default: true
 },
    Items: { type: mongoose.Schema.Types.ObjectId, ref: 'Items' } 
});

module.exports = Person;
