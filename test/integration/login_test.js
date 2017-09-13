var request = require('supertest');
var app = require('../../app');

describe('Integration: login', function() {
    before(function(done) {
        done();
    });
    beforeEach(function(done) {
        done();
    })

    describe('get /login', function() {
        it('LOGIN:Test1: Get the login endpoint successfully', function(done) {
            request(app).get('/login')
                .expect(302, done);
        })
    })
})
