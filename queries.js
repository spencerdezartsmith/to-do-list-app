const promise = require('bluebird');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/todos';
const db = pgp(connectionString);

let getAllTodos = (req, res, next) => {
  db.any('SELECT * FROM todos')
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL todos'
        });
    })
    .catch(err => {
      return next(err);
    });
}

module.exports = {
  getAllTodos: getAllTodos
};
