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
  const sql = 'insert into todos(description, due) values($1, $2)'

  const variables = [
    attributes.description,
    attributes.due
  ]
  return db.none(sql, variables)
};

const updateTodo = (id, attributes) => {
  attributes.id = parseInt(id)
  const sql = 'update todos set description = $1, status = $2, due = $3 WHERE id = $4'

  const variables = [
    attributes.description,
    attributes.status,
    attributes.due,
    attributes.id
  ]
  return db.none(sql, variables)
};

const deleteTodo = (id) => {
  objId = parseInt(id)
  return db.none('delete from todos where id = $1', [objId])
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
