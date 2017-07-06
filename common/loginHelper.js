var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Users = require('../repositories/users');
var hasha = require('hasha')

const db = require('../config/db')

passport.use(new LocalStrategy(
function(username, password, done) {
    console.log("Calling LocalStrategy helper");
    Users.findUserByLogin(username, function(err, userDetails) {
      if(err) return done(err);
      if(hasha(password, {algorithm: 'sha1'}) != userDetails.userPasswd)
        return done(new Error('Invalid UserName or Password supplied'))
      var user = {
              id: userDetails.id,
              userName: userDetails.userName
          }
      return done(null, user);
    })
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
