'use strict';

const ctrl = require('./user.controller');
const router = require('express').Router();
const verify = require('../shared/auth/verify');

router
  .post('/register', ctrl.register)
  .get('/verify/:token', verify, ctrl.verify)
  .post('/login', ctrl.login);

module.exports = { path: '/users', router };
