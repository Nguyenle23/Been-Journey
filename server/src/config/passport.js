
const CLIENTID = "618519447606-v77bdn6ojtnjjqr6kv3dmsshd9cc37tn.apps.googleusercontent.com";
const CLIENTSCERET = "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";
const REDIRECTURL = "http://localhost:5000/auth/google";

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
  clientID: CLIENTID,
  clientSecret: CLIENTSCERET,
  callbackURL: REDIRECTURL,
  passReqToCallback: true
},
  function (request, accessToken, refreshToken, profile, done) {
    // console.log({
    //   'AT': accessToken,
    //   'RQ': request.query
    // });
    return done(null, {
      'AT': accessToken,
      'RQ': request.query,
      'PR': profile
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
})
passport.deserializeUser(function (user, done) {
  console.log('deserializeUser', user);
  done(null, user);
});
