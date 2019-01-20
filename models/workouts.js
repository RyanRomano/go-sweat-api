const database = require('../db');

// fetch all workouts that 
// belong to provided session

const fetchAll = (sessionID, callback) => {
    database.query(
        `SELECT * FROM workouts
        WHERE session_id = $1`,
        [sessionID],
        callback
    )
}

module.exports = {
    fetchAll
}