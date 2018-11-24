const express = require('express');
const exercisesRouter = express.Router();
const pool = require('../db');

exercisesRouter.get('/', (req, res) => {
    pool.query(
        'SELECT exercises.id, exercises.exercise_name, muscle_groups.muscle_group, exercises.muscle_group_id FROM exercises ' + 
        'INNER JOIN muscle_groups ON exercises.muscle_group_id = muscle_groups.id',
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

module.exports = exercisesRouter;
