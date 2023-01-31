const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Albums = new Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String },
    productUrl: { type: String },
    mediaItemsCount: { type: String },
    coverPhotoBaseUrl: { type: String },
    coverPhotoMediaItemId: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model('Albums', Albums);