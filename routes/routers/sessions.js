const express = require('express');
const sessionsRouter = express.Router();
const pool = require('../../db');

sessionsRouter.get('/', (req, res) => {
    pool.query(
        'SELECT sessions.id, sessions.date, muscle_groups.name FROM sessions ' + 
        'LEFT OUTER JOIN workouts ON sessions.id = workouts.session_id ' + 
        'LEFT OUTER JOIN exercises ON workouts.exercise_id = exercises.id ' + 
        'LEFT OUTER JOIN exercise_muscle_groups ON exercises.id = exercise_muscle_groups.exercise_id ' + 
        'LEFT OUTER JOIN muscle_groups ON exercise_muscle_groups.muscle_group_id = muscle_groups.id',
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

sessionsRouter.get('/:id/workouts', (req, res) => {
    pool.query(
        'SELECT workouts.id, exercises.name, equipment.name, sets.weight, sets.reps, workouts.notes from workouts ' +
        'LEFT OUTER JOIN exercises ON workouts.exercise_id = exercises.id ' +
        'LEFT OUTER JOIN equipment ON exercises.equipment_id = equipment.id ' +
        'LEFT OUTER JOIN sets ON workouts.id = sets.workout_id ' + 
        'WHERE workouts.session_id = $1',
        [req.params.id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    )
});

sessionsRouter.post('/', (req, res) => {
    const {date} = req.body;
    pool.query(
        'INSERT INTO sessions(date) VALUES($1)', [date],
        (error) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully posted!');
            }
        }
    );
});

sessionsRouter.delete('/:id', (req, res) => {
    pool.query(
        'DELETE FROM sessions WHERE sessions.id = $1', 
        [req.params.id],
        (error) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully deleted!');
            }
        }
    );
});

module.exports = sessionsRouter;
