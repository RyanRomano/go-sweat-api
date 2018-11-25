const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
   res.send('Hello home');
});

module.exports = homeRouter;
