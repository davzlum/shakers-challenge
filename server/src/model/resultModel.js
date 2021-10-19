const mongoose = require('mongoose');

const ResultSchema = mongoose.Schema({
  isWinner: Boolean,
  isTie: Boolean,
  player: String,
});

module.exports = mongoose.model('Result', ResultSchema);
