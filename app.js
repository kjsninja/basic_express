//express
const express = require('express');

//create instance
const app = express();

//sample routes
const routes = require('./routes');

//import settings
const settings = require('./lib/settings');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', routes);

module.exports = app;