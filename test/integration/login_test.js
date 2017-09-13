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
        it('LOGIN:Test1: confirm a successful authentication', function(done) {
            request(app).get('/login')
                .expect(302, done);
        })
    })
})
