var express = require('express');
var router = express.Router();
var passport = require("../common/loginHelper")
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

/* GET home page. */
router.get('/', ensureLoggedIn, function(req, res, next) {
    console.log("Rendering home");
    res.render('pages/home');
});

module.exports = router;
