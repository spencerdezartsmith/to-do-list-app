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

let createTodo = (req, res, next) => {
  db.none('insert into todos(description, status, due)' + 'values($1, $2, $3)', [req.body.description, req.body.status, req.body.due])
    .then(() => {
      res.status(200)
      .json({
        status: 'success',
        message: 'inserted a todo'
      });
    })
    .catch(err => {
      return next(err)
    });
    console.log("This is the request body" + req.body);
}


module.exports = {
  getAllTodos: getAllTodos,
  createTodo: createTodo
};
