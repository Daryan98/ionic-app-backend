const Todo = require("../models/todoModel");

exports.createTodo = async (req, res) => {
    try {
      const newTodo = await Todo.create(req.body);
      res.status(201).json({
        status: 'successfully created todo',
        data: {
          tour: newTodo
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

exports.getAllTodos = async (req, res) => {
    try {
        const getAllTours = await Todo.find();
        res.status(200).json({
        status: 'success',
        data: getAllTours
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};

exports.updateTour = async (req, res) => {
    try {
        const tour = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
          });
        res.status(200).json({
        status: 'todo updated',
        data: tour
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).json({
        status: 'success',
        data: null
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
};