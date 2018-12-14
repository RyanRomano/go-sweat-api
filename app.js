const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const cors = require('cors');

app.use(cors({
    origin: `http://${process.env.CORS_HOST}:${process.env.CORS_PORT}`
}));

app.use(bodyParser.json());
app.use('/', routes);

module.exports = app;
