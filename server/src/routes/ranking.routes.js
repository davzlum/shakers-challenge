const Router = require('express');
const rankingController = require('../controllers/rankingController')();

function rankingsRoutes() {
  const routes = Router();

  routes
    .route('/')
    .get(rankingController.getRanking)
    .post(rankingController.updateRanking);

  return routes;
}

module.exports = rankingsRoutes();
