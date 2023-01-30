const Router = require('express').Router();
const authController = require('../controllers/AuthController');

Router.post('/google', authController.getGoogleAuthURL);
Router.get('/google', authController.getResourceGooglePhoto);

module.exports = Router;