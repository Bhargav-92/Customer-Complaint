const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  originalText: String,
  translatedText: String,
});

module.exports = mongoose.model('Text', TextSchema);
