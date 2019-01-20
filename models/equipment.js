const database = require('../db');

/**
 * fetchAll load all equipment that is used in
 * a particular session.
 */
const fetchAll = (sessionId, callback) => {
    database.query(`
        SELECT *
        FROM equipment
        WHERE id IN (
            SELECT distinct equipment_id
            FROM exercises
            WHERE id IN (
                SELECT distinct exercise_id
                FROM workouts
                WHERE session_id = $1
            )
        )`,
        [sessionId],
        callback
    )
}

module.exports = {
    fetchAll
}
