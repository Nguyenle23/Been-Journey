const express = require('express');
const routes = require('./routes/index');
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./config/passport');

const cors = require('cors');
const corsOptions = require('./config/domain');

const app = express();
const port = 5000;

const mongoose = require('./config/mongoDb');
mongoose.connect();

app.use(session({
  secret: 'been',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors(corsOptions));

routes(app);

app.get('/', (req, res) => res.send('RESTFull API successfully called'));

// app.get('/failed', (req, res) => res.send('You Failed to log in!'));

// app.get('/success', (req, res) => {
//   console.log('req', req.user);
// });

// app.get('/test', (req, res) => {
//   if (req.user) {
//     res.send(req.user);
//   }
// });

// app.get('/auth', passport.authenticate('google', {
//   scope:
//     [
//       'https://www.googleapis.com/auth/userinfo.profile',
//     ]
// }));

// app.get('/auth/google',
//   passport.authenticate('google', {
//     failureRedirect: '/failed',
//     successRedirect: 'http://localhost:3000/journey'
//   })
// );


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

