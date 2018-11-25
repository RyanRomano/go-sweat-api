const express = require('express');
const workoutRouter = express.Router();
const pool = require('../db');

workoutRouter.get('/', (req, res) => {
    res.send('Hello');
});

module.exports = workoutRouter;