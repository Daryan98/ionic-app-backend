const express = require('express');
const todoRouter = require('./routes/todoRoute');

const app = express();
app.use(express.json());
require('dotenv').config();

// Routers
app.use('/todo', todoRouter);


module.exports = app;