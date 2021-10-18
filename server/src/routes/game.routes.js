const Router = require('express');
const gameController = require('../controllers/gameController')();

function gameRoutes() {
  const routes = Router();

  routes
    .route('/results')
    .post(gameController.getWinner);
  return routes;
}

module.exports = gameRoutes();
