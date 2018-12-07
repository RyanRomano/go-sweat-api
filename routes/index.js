const {Router} = require('express');
const routes = Router();

const home = require('./routers/home');
const sessions = require('./routers/sessions');
const exercises = require('./routers/exercises');
const workouts = require('./routers/workouts');
const equipment = require('./routers/equipment');

// Define routes here
// Define nested routes within each route file
routes.use('/', home)
routes.use('/sessions', sessions);
routes.use('/exercises', exercises);
routes.use('/workouts', workouts);
routes.use('/equipment', equipment);

module.exports = routes;
