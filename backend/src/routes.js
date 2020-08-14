const express = require('express');

const routes = express.Router();

const indexController = require('./controllers/IndexController');

routes.get('/:user', indexController.index);

module.exports = routes;
