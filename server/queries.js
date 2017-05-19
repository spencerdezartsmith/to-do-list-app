const promise = require('bluebird');

const config = require('./_config');

const options = {
  promiseLib: promise
};

const pgp = require('pg-promise')(options);

const connectionString = config.selectENV(process.env.NODE_ENV);
const db = pgp(connectionString);

const getAllTodos = () => { return db.any('select * from todos'); };

const getOneTodo = (id) => {
  return db.one('select * from todos where id = $1', [id]);
};

const createTodo = (attributes) => {
  const sql = 'insert into todos(description) values($1)';
  const findsql = 'select * from todos where description = $1 limit 1';

  const variables = [
    attributes.description
  ];
  db.none(sql, variables);
  return db.one(findsql, variables);
};

const updateTodo = (id, attributes) => {
  attributes.id = parseInt(id);
  const sql = 'update todos set description = $1 WHERE id = $2';

  const variables = [
    attributes.description,
    attributes.id
  ];
  return db.none(sql, variables);
};

const deleteTodo = (id) => {
  objId = parseInt(id);
  return db.result('delete from todos where id = $1', [objId]);
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getOneTodo
};
