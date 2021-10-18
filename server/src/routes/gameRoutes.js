const Router = require('express');
const gameController = require('../controllers/gameController')();

function gameRoutes() {
  const routes = Router();

  routes
    .route('/results')
    .put(gameController.checkForWinner);

  return routes;
}

module.exports = gameRoutes();
