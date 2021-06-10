const TodoModel = require('../models/todo');
const { badRequest } = require('../config/error-helper');

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};

async function createTodo(data) {
  const todoExists = await TodoModel.findOne({ name: data.name });
  if (todoExists) {
    throw badRequest('TODO already exists');
  }
  const newTodo = new TodoModel(data);
  return newTodo.save();
}

async function getTodos() {
  return await TodoModel.find();
}

async function updateTodo(todoId, data) {
  const todoExists = await TodoModel.findById(todoId);
  if (!todoExists) {
    throw badRequest('Cannot find todo');
  }
  Object.assign(todoExists, data);
  return await todoExists.save();
}

async function deleteTodo(todoId) {
  return await TodoModel.findByIdAndRemove(todoId);
}
