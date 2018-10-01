'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('testing yondu endpoints with queries ', t => {
  request(app)
    .get("/yondu/?distance=120&time=10")
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      var expectedResult = {
        "distance": "120",
        "time": "10",
        "speed": 12
      };

      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Result as expected');
      t.end();
    });
});

test('testing yondu endpoints with no queries ', t => {
  request(app)
    .get("/yondu")
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      var expectedResult = {
        "error": "no data provided"
      };

      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Error message as expected');
      t.end();
    });
});