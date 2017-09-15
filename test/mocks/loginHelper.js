"use strict";

module.exports = {
  initialize : function() {
    console.log("Initialized");;
    return function(req, res, next) {
       return next();
    }
  },
  
  session : function() {
    console.log("Sessioned");
    return function(req, res, next) { return next() }
  },

  use : function() {
    console.log("Used");
    return function(req, res, next) {
       return next();
    }
  },

  authenticate : function() {
    console.log("Authenticated")
    return function(req, res, next) {
       req.session.passport = 'mocked'
       return next();
    }
  }
}
