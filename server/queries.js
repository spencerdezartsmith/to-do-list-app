const promise = require('bluebird');
const config = require('./_config');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = config.selectENV(process.env.NODE_ENV);
const db = pgp(connectionString);

const getAllTodos = () => {
  return db.any('select * from todos')
};

const createTodo = (attributes) => {
  const sql = 'insert into todos(description, status, due) values($1, $2, $3)'

  const variables = [
    attributes.description,
    attributes.status,
    attributes.due
  ]

  return db.none(sql, variables)
};

const updateTodo = (id, attributes) => {
  return db.none('update todos set description = $description, status = $status, due = $due WHERE id = $id')
};

const deleteTodo = (id) => {
  return db.result('delete from todos where id = $id')
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
