const express = require('express');
const sessionsRouter = express.Router();
const pool = require('../db');

sessionsRouter.get('/', (req, res) => {
    pool.query(
        'SELECT id, date, muscles_worked FROM sessions',
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

sessionsRouter.get('/:id', (req, res) => {
    pool.query(
        'SELECT id, date, muscles_worked FROM sessions WHERE sessions.id = $1',[req.params.id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

// get, post, put, delete endpoints here

module.exports = sessionsRouter;
