const express = require('express');
const sessionsRouter = express.Router();
const pool = require('../db');

sessionsRouter.get('/', (req, res) => {
    pool.query(
        'SELECT * FROM exercises',
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
