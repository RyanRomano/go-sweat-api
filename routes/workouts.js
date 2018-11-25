const express = require('express');
const workoutRouter = express.Router();
const pool = require('../db');

workoutRouter.get('/', (req, res) => {
    pool.query(
        'SELECT w.id, s.date, ex.exercise_name, eq.equipment_type, w.sets, w.reps, w.set1, w.set2, w.set3, w.notes ' +
        'FROM workouts w JOIN sessions s ON w.session_id = s.id ' +
        'JOIN exercises ex ON w.exercise_id = ex.id ' +
        'JOIN equipment eq ON w.equipment_id = eq.id',
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send(response.rows);
            }
        }
    );
});

workoutRouter.get('/:id', (req, res) => {
    pool.query(
        'SELECT w.id, s.date, ex.exercise_name, eq.equipment_type, w.sets, w.reps, w.set1, w.set2, w.set3, w.notes ' +
        'FROM workouts w JOIN sessions s ON w.session_id = s.id ' +
        'JOIN exercises ex ON w.exercise_id = ex.id ' +
        'JOIN equipment eq ON w.equipment_id = eq.id ' + 
        'WHERE w.id = $1',
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

module.exports = workoutRouter;
