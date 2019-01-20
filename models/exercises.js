const database = require('../db');

/**
 * fetchAll load all exercises that have been done
 * within a particular session.
 */
const fetchAll = (sessionId, callback) => {
    database.query(`
        SELECT *
        FROM exercises
        WHERE id IN (
                SELECT distinct exercise_id
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
