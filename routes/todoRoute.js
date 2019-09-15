const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();


// a simple test url to check that all of our files are communicating correctly.
router
  .route('/')
  .get(todoController.getAllTodos)
  .post(todoController.createTodo)
  .patch(todoController.createTodo)
  .delete(todoController.createTodo);


module.exports = router;