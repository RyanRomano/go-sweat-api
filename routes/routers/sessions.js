const express = require('express');
const sessionsRouter = express.Router();
const pool = require('../../db');

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
                res.status(500).send("Invalid session ID");
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

sessionsRouter.get('/:id/workouts', (req, res) => {
    pool.query(
        'SELECT w.id, w.session_id, w.exercise_id, w.equipment_id, s.date, ex.exercise_name, eq.equipment_type, w.sets, w.reps, w.set1, w.set2, w.set3, w.notes ' +
        'FROM workouts w JOIN sessions s ON w.session_id = s.id ' +
        'JOIN exercises ex ON w.exercise_id = ex.id ' +
        'JOIN equipment eq ON w.equipment_id = eq.id ' + 
        'WHERE w.session_id = $1',
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

sessionsRouter.put('/:id', (req, res) => {
    pool.query(
        'UPDATE sessions SET muscles_worked = $1 WHERE sessions.id = $2',
        [req.body.muscles_worked, req.params.id],
        (error, response) => {
            if(error){
                console.log(error);
            } else {
                res.send('Successfully updated');
            }
        }
    );
});

// get, post, put, delete endpoints here

module.exports = sessionsRouter;
