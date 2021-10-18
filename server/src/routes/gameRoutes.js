const Router = require('express');
const gameController = require('../controllers/gameController')();

function gameRoutes() {
  const routes = Router();

  routes
    .route('/results')
    .put(gameController.checkForWinner);
  routes
    .route('/rankings')
    .put(gameController.getRanking);

  return routes;
}

module.exports = gameRoutes();
