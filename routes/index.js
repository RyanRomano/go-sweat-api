const {Router} = require('express');
const routes = Router();

const home = require('./routers/home');
const sessions = require('./routers/sessions.js');
const exercises = require('./routers/exercises.js');
const workouts = require('./routers/workouts.js');

// Define routes here
// Define nested routes within each route file
routes.use('/', home)
routes.use('/sessions', sessions);
routes.use('/exercises', exercises);
routes.use('/workouts', workouts);

module.exports = routes;
