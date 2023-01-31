
const authRouter = require('./auth');
const albumRouter = require('./album');

function routes(app) {
  app.use('/auth', authRouter);
  app.use('/album', albumRouter);
}

module.exports = routes;