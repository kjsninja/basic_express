//express
const express = require('express');

//create instance
const app = express();

//middleware to process POST data
const bodyParser = require('body-parser');

//sample routes
const oauth = require('./routes/oauth');

//import settings
const settings = require('./lib/settings');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * Sample Routes
 * 
 * GET (index page)     /
 * GET                  /oauth/redirect
 */
app.get('/', function(req, res){
    //display hello world
    res.send(`Hello world`);
});
app.use('/oauth', oauth);

module.exports = app;