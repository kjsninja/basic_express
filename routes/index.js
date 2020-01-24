const router = require('express').Router();

router.use('/', require('../src/controllers/app'));

module.exports = router;