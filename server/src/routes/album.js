const Router = require('express').Router();
const albumController = require('../controllers/AlbumController');

Router.get('/', albumController.getAlbum);

module.exports = Router;