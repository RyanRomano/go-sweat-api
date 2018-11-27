const {Pool} = require('pg');

const {user, host, database, password, port} = require('../db_config/db_config.js');

const pool = new Pool({user,host,database,password,port});

pool.on('connect', () => {
    console.log('Connected to the db');
});

pool.on('remove', () => {
    console.log('Removed connection to the db');
    // process.exit(0);
});

module.exports = pool;
