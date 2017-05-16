const express = require('express');
const router = express.Router();

const db = require('../queries');

router.get('/api/todos', db.getAllTodos);


module.exports = router;
