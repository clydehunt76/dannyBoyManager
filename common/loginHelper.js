var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const Auth0Strategy = require('passport-auth0');
var Users = require('../repositories/users');
var hasha = require('hasha')

const db = require('../config/db')

const localStrategy = new LocalStrategy(
function(username, password, done) {
    console.log("Calling LocalStrategy helper");
    Users.findUserByLogin(username, function(err, userDetails) {
      if(err) return done(err);
      if(hasha(password, {algorithm: 'sha1'}) != userDetails.userPasswd)
        return done(new Error('Invalid email and/or password supplied, please try again'))
      var user = {
              id: userDetails.id,
              userName: userDetails.userName
          }
      return done(null, user);
    })
})

// Configure Passport to use Auth0
const auth0Strategy = new Auth0Strategy(
  {
    domain: 'dannyboyeventsmanager.eu.auth0.com',
    clientID: 'nqExifKJtiIZwqgQUsN60P4nJY5Jl1T_',
    clientSecret: 'z4XcRLdiDmVpw-9ZpBrMhRvqsjscFCWps5jf_qD0ndGyC13Heew8sc-M7m8Kltv2',
    callbackURL: 'http://localhost:3000/login/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);


passport.use(auth0Strategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

// passport.deserializeUser(function(id, done) {
//   var user = {
//           id: id,
//           userName: username
//       }
//   done(err, user);
// });
passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
