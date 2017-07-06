'use strict';

const Users = require('../../repositories/users');

var expect = require('chai').expect;

describe('users datastore method tests', function() {
  it('USER:FIND:Test1 Find a user by login Id that is invalid, confirm error', function(done) {
    Users.findUserByLogin('notAUser@nowhere.com', function(err, data) {
      expect(err).to.not.be.null;
      expect(data).to.be.null;
      expect(err.message).to.equal('User Not Found')
      done();
    })
  })
  it('USER:FIND:Test2 Find a user by login Id that is Valid, confirm data returned', function(done) {
    Users.findUserByLogin('valid@email.com', function(err, data) {
      expect(err).to.be.null;
      expect(data).to.not.be.null;
      expect(data.userName).to.equal('valid@email.com')
      expect(data.userPasswd).to.not.be.null
      expect(data.userRole).to.equal('EventManager')
      done();
    })
  })
})
