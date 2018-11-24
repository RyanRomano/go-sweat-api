const {Router} = require('express');
const routes = Router();

const home = require('./home.js');
const sessions = require('./sessions.js');
const exercises = require('./exercises.js');

// Define routes here
// Define nested routes within each route file
routes.use('/', home)
routes.use('/sessions', sessions);
routes.use('/exercises', exercises);

module.exports = routes;
