const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

