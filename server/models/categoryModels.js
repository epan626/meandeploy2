var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var CategorySchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true
    }
    });

module.exports = mongoose.model('Category', CategorySchema);
