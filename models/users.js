var db = require('../config/db')

var Users = db.Model.extend({
  tableName: 'users'
})

module.exports = Users;
