'use strict';

var db = require('../config/db');
const knex = db.knex;

var Users = require('../models/users')


module.exports = {

  findUserByLogin: function(loginName, cb) {
    Users.query({
      where: {
        userName: loginName
      }
    }).fetch()
    .then(function(model) {
      if(model) {
        cb(null, model.attributes)
      }
      else {
        cb(new Error("User Not Found"), null)
      }
    })
    .catch(function(err) {
      cb(err, null)
    })
  }
}
