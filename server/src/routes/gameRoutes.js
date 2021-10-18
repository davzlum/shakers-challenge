const Router = require('express');
const gameController = require('../controllers/gameController')();

function gameRoutes() {
  const routes = Router();

  routes
    .route('/results')
    .put(gameController.checkForWinner);
  routes
    .route('/rankings')
    .get(gameController.getRanking)
    .put(gameController.updateRanking);

  return routes;
}

module.exports = gameRoutes();
