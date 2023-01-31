const Album = require('../models/Album');

module.exports = {
  getAlbum: async (req, res) => {
    try {
      const albums = await Album.find();
      res.status(200).json(albums);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}