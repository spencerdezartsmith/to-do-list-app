const express = require('express');
const router = express.Router();

const db = require('../queries');

router.get('/api/todos', (req, res, next) => {
  db.getAllTodos()
    .then(todos => {
      res.render('index', { todos })
    })
    .catch(err => next(err))
});

router.get('/api/todos/:id', (req, res, next) => {
  db.getOneTodo(req.params.id)
    .then((todo) => {
      res.statusCode = 200;
      res.send(JSON.stringify(todo));
    })
    .catch(err => next(err))
})

router.post('/api/todos', (req, res, next) => {
  db.createTodo(req.body)
    .then((todo) => {
      res.statusCode = 200;
      res.send(JSON.stringify(todo))
    })
    .catch(err => next(err))
});

router.put('/api/todos/:id', (req, res, next) => {
  const id = req.params.id
  db.updateTodo(id, req.body)
    .then(() => {
      db.getOneTodo(id)
        .then(todo => {
          res.statusCode = 200
          res.send(JSON.stringify(todo))
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
});

router.delete('/api/todos/:id', (req, res, next) => {
  const id = req.params.id
  db.deleteTodo(id)
    .then((response) => {
      res.statusCode = 200
      res.send('Deleted todo')
    })
    .catch(err => next(err))
});

module.exports = router;
