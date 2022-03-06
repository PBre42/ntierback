const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
    name : { type: String, required: true},
    path: {type: String, required: true},
});

module.exports = mongoose.model('Picture', pictureSchema);