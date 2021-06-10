const todoRoutes = require('./todo.route');
const express = require('express');
const router = express.Router();

router.use('/todos', todoRoutes);

module.exports = router;
