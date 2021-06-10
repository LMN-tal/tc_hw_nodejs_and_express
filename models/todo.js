const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: { type: String, required: true, unique: true, max: 200 },
  description: { type: String, max: 1000},
  done: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model('Todo', TodoSchema);
