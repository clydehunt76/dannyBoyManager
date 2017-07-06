
'use strict';

const hasha = require('hasha')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userName: 'valid@email.com', userPasswd: hasha('aValidpassw0rd', {algorithm: 'sha1'}), userRole: 'EventManager'}
      ]);
    });
};
