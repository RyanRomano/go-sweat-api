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

module.exports = workoutRouter;


// id           | integer                |           | not null | nextval('workouts_id_seq'::regclass)
//  session_id (date)  | integer                |           | not null | 
//  exercise_id (exercise name) | integer                |           | not null | 
//  equipment_id (equipment type )| integer                |           | not null | 
//  sets         | integer                |           |          | 
//  reps         | integer                |           |          | 
//  set1         | integer                |           |          | 
//  set2         | integer                |           |          | 
//  set3         | integer                |           |          | 
//  notes   