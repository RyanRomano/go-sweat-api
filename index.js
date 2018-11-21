const express = require('express');
const pool = require('./db')
const app = express();

app.get('/', (req, res) => {
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

module.exports = app;