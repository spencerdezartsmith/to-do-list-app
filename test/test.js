const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server/app');
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
        res.body.status.should.eq('success');
      done();
      });
  });
  it('should add a SINGLE todo on /todos POST');
  it('should update a SINGLE todo on /todo/<id> PUT');
  it('should delete a SINGLE todo on /todo/<id> DELETE');
});
