const express = require('express');
const workoutRouter = express.Router();
const pool = require('../../db');

workoutRouter.get('/', (req, res) => {
    pool.query(
        'SELECT w.id, w.session_id, s.date, ex.exercise_name, eq.equipment_type, w.sets, w.reps, w.set1, w.set2, w.set3, w.notes ' +
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
        'SELECT w.id, s.date, ex.id, eq.id, ex.exercise_name, eq.equipment_type, w.sets, w.reps, w.set1, w.set2, w.set3, w.notes ' +
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

workoutRouter.post('/', (req, res) => {
    const {session_id, exercise_id, equipment_id, sets, reps, set1, set2, set3, notes} = req.body;
    pool.query('INSERT INTO workouts(session_id, exercise_id, equipment_id, sets, reps, set1, set2, set3, notes) ' + 
    'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [session_id, exercise_id, equipment_id, sets, reps, set1, set2, set3, notes],
    (error, response) => {
        if(error){
            console.log(error);
        } else {
            res.send('Successfully posted!');
        }
    });
});

workoutRouter.delete('/:id', (req, res) => {
    pool.query('DELETE FROM workouts WHERE id = $1',
        [req.params.id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully deleted!');
            }
        }
    );
});

workoutRouter.put('/:id', (req, res) => {
    const {exercise_id, equipment_id, sets, reps, set1, set2, set3, notes} = req.body;
    pool.query('UPDATE workouts SET exercise_id = $1, equipment_id = $2, ' +
        'sets = $3, reps = $4, set1 = $5, set2 = $6, set3 = $7, notes = $8 ' + 
        'WHERE id = $9',
        [exercise_id, equipment_id, sets, reps, set1, set2, set3, notes, req.params.id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully updated!');
            }
        }
    );
});

module.exports = workoutRouter;
