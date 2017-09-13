"use strict";

module.exports = {
  initialize: function() {
    console.log("Initialized");;
  },
  session: function() {
    console.log("Sessioned");
  },
  use: function() {
    console.log("Used");
  },
  authenticate: function() {
    console.log("Authenticated")
  }(req, res, next),
  log: function() {
    console.log("Successfully Mocked");
  }
}
