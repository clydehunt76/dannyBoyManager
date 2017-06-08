var express = require('express');
var router = express.Router();

var passport = require("../common/loginHelper")

/* POST Authentication request listing. */
router.post('/',
      passport.authenticate('local', { successRedirect: '/home', failureRedirect: '/'}),
      function(req, res, next) {
        console.log("Handling login request");
      }
);

module.exports = router;
