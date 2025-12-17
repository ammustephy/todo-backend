const express = require("express");
const cors = require('cors');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.route');
const TodoRouter = require('./routers/todo.route');

const app =express();

app.use(cors({
  origin: 'https://ammustephy.github.io',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use(body_parser.json());
app.use(express.json());

app.use('/', userRouter);
app.use('/', TodoRouter);

module.exports=app;