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

sessionsRouter.post('/', (req, res) => {
    const {date, muscles_worked} = req.body;
    pool.query(
        'INSERT INTO sessions(date, muscles_worked) VALUES($1, $2)', [date, muscles_worked],
        (error) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully posted!');
            }
        }
    );
});

// get, post, put, delete endpoints here

module.exports = sessionsRouter;
