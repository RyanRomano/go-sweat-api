const database = require('../db');

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

module.exports = {
    fetchAll
}