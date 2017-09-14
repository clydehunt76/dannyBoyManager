"use strict";

module.exports = {
  initialize: function() {
    console.log("Initialized");;
    return function(req, res, next) {
       passport = this;
       passport._key = 'passport';
       passport._userProperty = 'user';
       passport.serializeUser = function(user, done) {
           return done(null, user.id);
       };
       passport.deserializeUser = function(user, done) {
           return done(null, user);
       };
       req._passport = {
           instance: passport
       };
       req._passport.session = {
           user: new app.models.User({ id: 1, name: 'A Person' })
       };

       return next();
    }
  },
  session: function() {
    console.log("Sessioned");
    return function(req, res, next) { return next() }
  },
  use: function() {
    console.log("Used");
  },
  authenticate: function() {
    console.log("Authenticated")
    return function(req, res, next) { return next() }
  },
  log: function() {
    console.log("Successfully Mocked");
  }
}
