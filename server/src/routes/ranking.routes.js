const Router = require('express');
const rankingController = require('../controllers/rankingController')();

function rankingsRoutes() {
  const routes = Router();

  routes
    .route('/')
    .post(rankingController.createRanking)
    .put(rankingController.updateRanking);

  return routes;
}

module.exports = rankingsRoutes();
