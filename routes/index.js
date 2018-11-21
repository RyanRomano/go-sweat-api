const {Router} = require('express');
const routes = Router();
const home = require('./home.js');
const sessions = require('./sessions.js');
// const whatever = require('./whatever.js');

// Define routes here
// Define nested routes within each route file
routes.use('/', home)
routes.use('/sessions', sessions);
// routes.use('/whatever', whatever)

module.exports = routes;
