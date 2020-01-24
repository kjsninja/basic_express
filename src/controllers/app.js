const router = require('express').Router();
const { App } = require('../models/app');

router.get('/', (req, res)=>{
    res.send('Hello World');
});

router.post('/', (req, res)=>{
    res.send(App.init());
});

module.exports = router;