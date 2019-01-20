const database = require('../db');

/**
 * fetchAll loads all of the sets that belong to workouts
 * that are in the provided session
 */
const fetchAll = (sessionId, callback) => {
    database.query(`
        SELECT *
        FROM sets
        WHERE workout_id IN (
            SELECT id
            FROM workouts
            WHERE session_id = $1
        )`,
        [sessionId],
        callback
    )
}

module.exports = {
    fetchAll
}
