const Router = require('express');
const playController = require('../controllers/playController')();

function playsRoutes() {
  const routes = Router();

  routes
    .route('/')
    .post(playController.getPlay);

  return routes;
}

module.exports = playsRoutes();
