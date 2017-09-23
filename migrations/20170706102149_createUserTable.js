
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('userName');
      table.string('userPasswd');
      table.string('userRole');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
