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
        res.should.be.json;
        res.body.should.be.a('object');
      done();
      });
  });

  it('should add a SINGLE todo on /api/todos POST', (done) => {
    chai.request(server)
      .post('/api/todos')
      .send({ "description": "fix hair", "status": false })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
      done();
    });
  });

  it('should update a SINGLE todo on /todo/<id> PUT', (done) => {
      chai.request(server)
        .put('/api/todos/1')
        .send({ "description": "finish challenge", "status": false })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
        done();
      });
  });

  it('should delete a SINGLE todo on /todo/<id> DELETE', (done) => {
    chai.request(server)
      .delete('/api/todos/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.message.should.equal('Deleted todo');
      done();
    });
  });
});
