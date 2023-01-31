const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nguyenle23:B1E24681010@netflix.ebo3xoq.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected');
    } catch (err) {
        console.log('Failed')
    }
}

module.exports = { connect };