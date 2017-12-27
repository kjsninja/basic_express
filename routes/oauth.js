const express = require('express');
const router = express.Router();

//import settings
const settings = require('../lib/settings');

//import library
const ajax = require('../lib/ajax');

//create /redirect endpoint
router.get('/redirect', function(req, res, next) {
    //access token will be processed here
    res.send("Access token goes here");
});
module.exports = router;