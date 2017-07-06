
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.unique('userName')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', function(table) {
    table.dropUnique('userName')
  })
};
