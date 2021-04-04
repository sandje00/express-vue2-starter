'use strict';

const router = require('express').Router();
const user = require('./user');

router.use(user.path, user.router);

module.exports = router;
