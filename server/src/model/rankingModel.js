const mongoose = require('mongoose');

const RankingSchema = mongoose.Schema({
  playerX: {
    won: Number,
    lost: Number,
    tied: Number
  },
  playerO: {
    won: Number,
    lost: Number,
    tied: Number
  }
});

module.exports = mongoose.model('Ranking', RankingSchema);
