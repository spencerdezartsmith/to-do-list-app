const express = require('express');
const router = express.Router();

const db = require('../queries');

router.get('/api/todos', (req, res, next) => {
  db.getAllTodos()
    .then(todos => res.render('index'))
    .catch(err => next(err))
});

router.post('/api/todos', (req, res, next) => {
  db.createTodo(req.body)
    .then(() => {
      res.redirect('/api/todos')
    })
    .catch(err => next(err))
});

router.post('/api/todos/:id', (req, res, next) => {
  db.updateTodo(req.params.id, req.body)
    .then(() => {
      res.redirect('/api/todos')
    })
    .catch(err => next(err))
});

router.post('/api/todos/remove/:id', (req, res, next) => {
  db.deleteTodo(req.params.id)
    .then(() => {
      res.redirect('/api/todos')
    })
    .catch(err => next(err))
});

module.exports = router;
