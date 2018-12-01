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



// CREATE TABLE sessions (
//     id SERIAL PRIMARY KEY,
//     date TIMESTAMP NOT NULL UNIQUE,
//     muscles_worked VARCHAR(50) NOT NULL
//     );
    
//     CREATE TABLE exercises (
//     id SERIAL PRIMARY KEY,
//     exercise_name VARCHAR(50) NOT NULL UNIQUE,
//     muscle_group_id INT REFERENCES muscle_groups(id) NOT NULL
//     );
    
//     CREATE TABLE muscle_groups (
//     id SERIAL PRIMARY KEY,
//     muscle_group VARCHAR(50) NOT NULL UNIQUE
//     );
    
//     CREATE TABLE equipment (
//     id SERIAL PRIMARY KEY,
//     equipment_type VARCHAR(50) NOT NULL UNIQUE
//     );
    
//     CREATE TABLE workouts (
//     id SERIAL PRIMARY KEY,
//     session_id INT REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
//     exercise_id INT REFERENCES exercises(id) NOT NULL,
//     equipment_id INT REFERENCES equipment(id) NOT NULL,
//     sets INT,
//     reps INT,
//     set1 INT,
//     set2 INT,
//     set3 INT,
//     notes VARCHAR(150)
//     );