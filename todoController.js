const Todo = require("../models/Todo");
const { generateSummary } = require("../ai/ai");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json({ message: "Todo deleted successfully" });
};

exports.getSummary = async (req, res) => {
  const period = req.query.period || "day";
  const todos = await Todo.find();
  const summary = generateSummary(todos, period);
  res.json(summary);
};
