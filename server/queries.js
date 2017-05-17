const promise = require('bluebird');
const config = require('./_config');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = config.selectENV(process.env.NODE_ENV);
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
      return next(err);
    })
};

let updateTodo = (req, res, next) => {
  db.none('update todos set description = $1, status = $2, due = $3 WHERE id = $4', [req.body.description, req.body.status, req.body.due, req.params.id])
    .then (() => {
      res.status(200)
      .json({
        status: 'success',
        message: 'updated todo'
      });
    })
    .catch(err => {
      return next(err);
    })
};

let deleteTodo = (req, res, next) => {
  db.result('DELETE FROM todos WHERE id = $1', req.params.id)
    .then(result => {
      res.status(200)
      .json({
        status: 'success',
        message: `Removed ${result.rowCount} todo`
      })
      console.log("Result " + result.rowCount);
      console.log("This is the result" + result);
    })
    .catch(err => {
      return next(err);
    })
};



module.exports = {
  getAllTodos: getAllTodos,
  createTodo: createTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo
};
