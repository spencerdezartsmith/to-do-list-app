const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHTTP);

describe('Todos', function() {
  it('should list ALL todos on /api/todos GET', (done) => {
    chai.request(server)
      .get('/api/todos')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
      done();
      });
  });

  it('should list 1 todo on /api/todos/<id> GET', (done) => {
    chai.request(server)
      .get('/api/todos/2')
      .end((err, res) => {
        res.should.have.status(200);
      done();
      });
  });

  it('should add a SINGLE todo on /api/todos POST', (done) => {
    chai.request(server)
      .post('/api/todos')
      .send({ "description": "fix hair" })
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });

  it('should update a SINGLE todo on /todo/<id> PUT', (done) => {
      chai.request(server)
        .put('/api/todos/1')
        .send({ "description": "finish challenge" })
        .end((err, res) => {
          res.should.have.status(200);
        done();
      });
  });

  it('should delete a SINGLE todo on /todo/<id> DELETE', (done) => {
    chai.request(server)
      .delete('/api/todos/3')
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });
});
