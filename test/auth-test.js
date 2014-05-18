var assert = require('chai').assert
  , request = require('supertest')
  , app = require('../lib/opensoc-ui').app;

describe('auth', function () {
  var session = request.agent(app);

  it('logs in', function (done) {
    session.
      post('/login').
      send({ username: 'foo', password: 'plaintext password' }).
      end(function (err, res) {
        // redirects to home
        assert.equal(res.header['location'], '/');
        assert.equal(res.statusCode, 302);
        done();
      });
  });

  it('logs out', function (done) {
    session.
      get('/logout').
      end(function (err, res) {
        // redirects to login
        assert.equal(res.header['location'], '/login');
        assert.equal(res.statusCode, 302);
        done();
      });
  });
});