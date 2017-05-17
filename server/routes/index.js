const express = require('express');
const router = express.Router();

const db = require('../queries');

router.get('/api/todos', (req, res, next) => {
  db.getAllTodos()
    .then(todos => res.render('index'))
    .catch(err => next(err))
});



router.post('/api/todos', db.createTodo);
router.put('/api/todos/:id', db.updateTodo);
router.delete('/api/todos/:id', db.deleteTodo);



module.exports = router;
