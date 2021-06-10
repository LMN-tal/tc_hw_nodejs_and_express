const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router
  .get('/', todoController.getTodos)
  .post('/', todoController.createTodo)
  .put('/:todoId', todoController.updateTodo)
  .delete('/:todoId', todoController.deleteTodo);

module.exports = router;
