const express = require('express');
const exercisesRouter = express.Router();
const pool = require('../../db');

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

exercisesRouter.get('/:id', (req, res) => {
    pool.query(
        'SELECT exercises.id, exercises.exercise_name, muscle_groups.muscle_group, exercises.muscle_group_id FROM exercises ' + 
        'INNER JOIN muscle_groups ON exercises.muscle_group_id = muscle_groups.id WHERE exercises.id = $1',
        [req.params.id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

exercisesRouter.post('/', (req, res) => {
    const {exercise_name, muscle_group_id} = req.body;
    pool.query(
        'INSERT INTO exercises (exercise_name, muscle_group_id) VALUES ($1, $2)',
        [exercise_name, muscle_group_id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully posted');
            }
        }
    );
});

exercisesRouter.put('/:id', (req, res) => {
    const {exercise_name, muscle_group_id} = req.body;
    pool.query('UPDATE exercises SET exercise_name = $1, muscle_group_id = $2 ' + 
    'WHERE exercises.id = $3',
    [exercise_name, muscle_group_id, req.params.id],
    (error, response) => {
        if(error){
            console.log(error);
        } else {
            res.send('Successfully updated!')
        }
    });
});

exercisesRouter.delete('/:id', (req, res) => {
    pool.query('DELETE FROM exercises WHERE id = $1',
    [req.params.id],
    (error, response) => {
        if(error){
            console.log(error);
        } else {
            res.send('Successfully deleted')
        }
    });
});

module.exports = exercisesRouter;
