
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('users')
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('userName').unique();
    table.string('userPasswd');
    table.string('userRole');
  })
};
