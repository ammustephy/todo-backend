const express = require("express");
const cors = require('cors');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.route');
const TodoRouter = require('./routers/todo.route');

const app =express();

app.use(cors({
  origin: [
    'https://ammustephy.github.io',
    'http://localhost:3000',
    'http://localhost:8080',      // Common Flutter web dev port
    'http://localhost:5000',      // Another common port
    'http://127.0.0.1:8080',      // Alternative localhost
    'http://localhost',           // Generic localhost
    'http://192.168.29.239:8080', // Your local network IP (if testing on network)
    'http://192.168.1.35:8080'    // Your other local network IP
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use(body_parser.json());
app.use(express.json());

app.use('/', userRouter);
app.use('/', TodoRouter);

module.exports=app;