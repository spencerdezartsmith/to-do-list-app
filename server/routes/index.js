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

router.put('/api/todos/:id', db.updateTodo);
router.delete('/api/todos/:id', db.deleteTodo);



module.exports = router;
