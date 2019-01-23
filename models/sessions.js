const database = require('../db');
const workouts = require('./workouts');
const exercises = require('./exercises');
const sets = require('./sets');
const equipment = require('./equipment');

//fetchAll - return all sessions in the database
const fetchAll = (limit, offset, callback) => {
    database.query(
        `SELECT * 
        FROM sessions 
        LIMIT $1 OFFSET $2`,
        [limit, offset],
        callback
    )
}

//Get all data from sessions by id
const fetch = (id, callback) => {
    database.query(
        'SELECT * FROM sessions WHERE id = $1',
        [id],
        callback
    )
}

const fetchExpanded = (id, callback) => {
    fetch(id, (err, dbResp) => {
        if(typeof err !== 'undefined') {
            callback(err, null)
            return
        }
        if (dbResp.rows.length === 0) {
            callback(undefined, null)
            return
        }

        // Expand the workouts, passing along the callback
        // dbResponse is the session
        let session = dbResp.rows[0]
        expandWorkouts(session, callback)
    });
}

const expandWorkouts = (session, callback) => {
    workouts.fetchAll(session.id, (err, dbResp) => {
        // If there an an error, return it to the main callback
        if(typeof err !== 'undefined') {
            callback(err, null)
            return
        }

        // Set the workouts
        session.workouts = dbResp.rows

        // Expand the exercises of the workouts
        expandExercises(session, callback)
    })
}

const expandExercises = (session, callback) => {
    exercises.fetchAll(session.id, (err, dbResp) => {
        // If there an an error, return it to the main callback
        if(typeof err !== 'undefined') {
            callback(err, null)
            return
        }

        // For each workout, go and replace exercise_id
        // with the approprate exercise object
        session.workouts.forEach((workout) => {
            workout.exercise = dbResp.rows.filter((exercise) => exercise.id === workout.exercise_id)[0]
            //Removes duplicate exercise id value
            delete workout.exercise_id
        })

        // Expand the equipment_id for each workout
        expandEquipment(session, callback)
        // callback(undefined, session)
    })
}

const expandEquipment = (session, callback) => {
    equipment.fetchAll(session.id, (err, dbResp) => {
        // If there an an error, return it to the main callback
        if(typeof err !== 'undefined') {
            callback(err, null)
            return
        }

        // For each workout, go and replace equipment_id
        // with the appropriate equipment object
        session.workouts.forEach((workout) => {
            workout.exercise.equipment = dbResp.rows.filter((equip) => equip.id === workout.exercise.equipment_id)[0]
            delete workout.exercise.equipment_id
        })

        // Expand the sets for each workout
        expandSets(session, callback)
        // callback(undefined, session)
    })
}

const expandSets = (session, callback) => {
    sets.fetchAll(session.id, (err, dbResp) => {
        // If there an an error, return it to the main callback
        if(typeof err !== 'undefined') {
            callback(err, null)
            return
        }

        // Appending sets to each workout
        session.workouts.forEach((workout) => {
            workout.sets = dbResp.rows.filter((set) => set.workout_id === workout.id)
        })

        // Finally, callback
        // Callback params: (error, data to return)
        // Return undefined if no error - already error checked at this point
        callback(undefined, session)
    })
}

module.exports = {
    fetch,
    fetchAll,
    fetchExpanded
}