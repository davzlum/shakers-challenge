const Router = require('express');
const gameController = require('../controllers/gameController')();

function gameRoutes() {
  const routes = Router();

  routes
    .route('/results')
    .post(gameController.getWinner);
  routes
    .route('/rankings')
    .get(gameController.getRanking)
    .post(gameController.updateRanking);

  return routes;
}

module.exports = gameRoutes();
