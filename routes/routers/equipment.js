const express = require('express');
const equipmentRouter = express.Router();
const pool = require('../../db');

equipmentRouter.get('/', (req, res) => {
    pool.query(
        'SELECT id, equipment_type FROM equipment',
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

module.exports = equipmentRouter;