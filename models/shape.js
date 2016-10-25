var mongoose = require('mongoose');

var shapesSchema = new mongoose.Schema({
  url: String,
  name: { type: String, index: true },
  color: String,
  seenTimes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Shape', shapesSchema);
