const {Pool} = require('pg');

const pool = new Pool({connectionString: process.env.DATABASE_URL});

pool.on('connect', () => {
    console.log(`Connected to the db`);
});

pool.on('remove', () => {
    console.log('Removed connection to the db');
});

module.exports = pool;
