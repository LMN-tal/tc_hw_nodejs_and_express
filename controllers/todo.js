const todoService = require('../services/todo.service');

module.exports = {
  createTodo,
  updateTodo,  
  getTodos,
  deleteTodo
};

async function createTodo(req, res, next) {
  try {
    const data = req.body;
    const result = await todoService.createTodo(data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function getTodos(req, res, next) {
  try {
    const result = await todoService.getTodos();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function updateTodo(req, res, next) {
  try {
    const todoId = req.params.todoId;
    const data = req.body;
    const result = await todoService.updateTodo(todoId, data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function deleteTodo(req, res, next) {
  try {
    const todoId = req.params.todoId;
    const data = req.body;
    const result = await todoService.deleteTodo(todoId);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}