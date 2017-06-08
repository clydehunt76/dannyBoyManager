var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
function(username, password, done) {
    console.log("Calling LocalStrategy helper");
    var user = {
            id: 1,
            userName: username
        }
        // return done(null, false, { message: 'Incorrect username.' });
    return done(null, user);
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  var user = {
          id: id,
          userName: username
      }
  done(err, user);
});

module.exports = passport;
