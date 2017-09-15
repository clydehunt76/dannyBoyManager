"use strict";

var express = require('express');
var router = express.Router();

var passport = require("../common/loginHelper")
const env = {
  AUTH0_CLIENT_ID: 'nqExifKJtiIZwqgQUsN60P4nJY5Jl1T_',
  AUTH0_DOMAIN: 'dannyboyeventsmanager.eu.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3000/login/callback'
};

// Perform the login
router.get('/', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  function(req, res) {
    console.log("Processing login request");
    res.redirect('/login/callback');
  }
);

router.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    console.log("Processing login callback request");
    res.redirect(req.session.returnTo || '/home');
  }
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
